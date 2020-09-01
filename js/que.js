if(getUrlParameter('multiple')){
  $formNo = getUrlParameter('multiple')
  $form = $multiples[$formNo]
}else{
  $formNo = getUrlParameter('form')
  $form = $forms[$formNo]
}

if($formNo == 1){
  sessionStorage.setItem('timesToAsk', 0);
}

sessionStorage.setItem('formNo', $formNo);

$slidewrapper = $('.slidewrapper');
$back_btn = $('#back-btn');
$next_btn = $('#next-btn');

//current div of the question
$current_que_obj = undefined;

//current question text
$current_que= undefined;

//list of asked questions
$asked = []

$answers = {}

$status = "inactive";

$nodes = $('#nodes')

set_default();

function generate_question_using_id($id){

  console.log("gen", $id)

  $que = $form[$id];
  $question = $que['question'];
  $type = $que["type"]["input"];

  $answers[$id] = {}
  $answers[$id]['question'] = $question;

  //for radio
  if($type == "radio"){

    //append to slide wrapper
    $div = $('<div id="' + $id + '" class="input-group tab slide que"><label class="label que-text">' + $question + '</label><div class="p-t-10"></div>').appendTo($slidewrapper);

    //get input field
    $input = $('<input class="input--style-4 " type="text" que_type="' + $type +'">').appendTo($div).hide();

  }

  //for dropdown
  else if($type == "dropdown"){
    $options = $que["type"]["options"];

    //append to slide wrapper
    $div = $('<div id="' + $id + '" class="input-group tab slide que"><label class="label que-text">' + $question + '</label><div class="p-t-10"></div>').appendTo($slidewrapper);

    //get input field
    $input = $('<input class="input--style-4 " type="text" que_type="' + $type +'">').appendTo($div).hide();

    $select = $('<select id="' + $id + '" style="width:100%"></select>').appendTo($div);

    $select.select2();


  }

  //for text
  else{
    $div = $('<div id="' + $id + '" class="input-group tab slide que"><label class="label que-text">' + $question + '</label><input class="input--style-4 " type="text" que_type="' + $type +'">').appendTo($slidewrapper);
    $input = $div.find('input');$div.find('input');
  }

  $div.css("display","none");

  $asked.push($id)

  $node = $('<div id="' + $id + '" class="btn btn--radius-2 btn--blue node-btn">' + $question + '</div>').appendTo($nodes)

  $node.click(function(){
    $current_que_id = $(this).attr("id");
    $current_que_obj = $slidewrapper.find('#' + $current_que_id);
    $current_que = $form[$current_que_id];
    show_que($current_que_obj);
    $jumped=true;
  });

  return $div
}

function generate_next_question_using_id($id){
  console.log("gen next", $id);
  $next_id = $id+1;
  $next_que = $form[$next_id]

  if($next_que === undefined){
    return
  }

  $pre = $next_que["pre"]
  if(check_pre($pre)){
    console.log("generating", $next_id)
    generate_question_using_id($next_id);
    return $next_id
  }else{
    console.log("skiping", $next_id)
    generate_next_question_using_id($next_id)
  }

  return $next_id
}

function does_que_exist($id){
  return ($('.slidewrapper').find("#" + $id).length == 1);
}

function show_que($que){
  $('.que').css("display","none");
  $que.css("display","block");
  ask_question($current_que["question"]);
  add_all_options();
  make_node_active();

  setTimeout(function(){
    start_recognizing();
  }, $current_que["question"].length * 60);
}

function get_current_question_id(){
  return parseInt($current_que_obj.attr("id"));
}

function next_que(){


  if($current_que_obj.next().length == 0){
    $current_que["id"] = get_current_question_id();
    //console.log($current_que_id);

    $generated_id = generate_next_question_using_id($current_que["id"]);


    if($generated_id === undefined){

      console.log("form ends here")

      if(getUrlParameter('multiple')){
          $timesToAsk = $result;
          sessionStorage.setItem('timesToAsk', $timesToAsk)
      }

      save_and_generate();
      return
    }

    console.log("generated", $generated_id);
  }

  $current_que_obj = $current_que_obj.next();
  $current_que = $form[get_current_question_id()]
  show_que($current_que_obj);
  $prev_que_obj = $current_que_obj;
  $prev_que = $current_que;
}

function prev_que(){
  if($current_que_obj.prev().length == 0){
    return;
  }
  $current_que_obj = $current_que_obj.prev();
  $current_que = $form[get_current_question_id()]
  show_que($current_que_obj);
}

$back_btn.click(function(){
  prev_que()
})

$next_btn.click(function(){

  $result = valid()

  if($result != false){

    $type = $current_que["type"]["input"]

    if($type == "radio" || $type == "dropdown"){
          $answers[get_current_question_id()]["options"] = $current_que["type"]["options"];
    }

    $answers[get_current_question_id()]['type'] = $type;
    $answers[get_current_question_id()]['answer'] = $result;



    if($jumped){
      jump_que()
    }else{
      next_que()
    }

    set_default();
  }

  else{

    console.log($tries)

    $tries += 1;

    if($tries < 3){
      show_que($current_que_obj);
    }else{
      enable_edit();
    }
  }
})

function check_pre($pre){
  for(i in $pre){
    console.log("pre" + i);

    if($.inArray(parseInt(i), $asked) < 0){
      console.log($asked, i, "not asked");
      return false;
    }

    if($pre[i] != $answers[i]['answer']){
      console.log($pre, $pre[i], $answers[i]['answer'], "pre false")
      return false;
    }
  }
  return true;
}

function ask_question($question){
  responsiveVoice.speak($question, "Hindi Female");
}

function start_recognizing(){
  try {
    speechRecognizer.start();
    $status = "starting";
    console.log($status);
  }
  catch(err) {
    if(err.message == "Failed to execute 'start' on 'SpeechRecognition': recognition has already started."){
      console.log("already running");
      $status = "already running";
      console.log($status);

      end_recognizing();

      while($status != "forcefully ended"){
        $status = "starting again";
        console.log("starting again");
      }

      setTimeout(function(){
        console.log("aaa")
        speechRecognizer.start();
        console.log("bbb")
      }, 500);

    }else{
      console.error(err);
    }
  }
}

function end_recognizing(){
  $status = "forcefully ended";
  console.log($status);
  speechRecognizer.stop();
}

//start
function start(){
  $("#start-btn").css("display", "none")
  $back_btn.css("display", "block")
  $next_btn.css("display", "none");

  $current_que_obj = generate_question_using_id(1);
  $current_que = $form[get_current_question_id()];
  show_que($current_que_obj);
}

//user answered
function user_ended(){
  if($status == "user ended"){
    $next_btn.click();
  }
}

//intermediate updates
function update($text){
  $current_que_input = $current_que_obj.find('input');
  $current_que_input.val($text)

  $type = $current_que["type"]["input"];

  $result = $text;

  if($type == "radio"){
    $result = select_fuzzy_radio($text);
  }

  else if($type == "dropdown"){
    $result = select_fuzzy_dropdown($text, );
  }

  return $result;

}

function interim_updates(){
  update($transcript)
}

function final_updates(){
  $result = update($speechresult)
}

function select_fuzzy_radio($text){

  $options_set = FuzzySet($current_que["type"]["options"])
  $fuzzy_text = $options_set.get($text);
  if($fuzzy_text){
    $to_select = $current_que_obj.find('input[ans="' + $fuzzy_text[0][1] + '"]');

    console.log($to_select)

    $to_select.prop("checked", "checked");

    //apply animation
    $div.find('img').removeClass('radio-image-select');
    $to_apply = $current_que_obj.find('img[value="' + $fuzzy_text[0][1] + '"]');
    $to_apply.addClass('radio-image-select');

    return $fuzzy_text[0][1];
  }

  return '';
}

function select_fuzzy_dropdown($text, $options){

  $ans = undefined;

  $options = $current_que["type"]["options"];
  $results = fuzzysort.go($text.toLowerCase(), $options)

  console.log($results);

  //$html = results_to_html($results)


  $current_que_select = $current_que_obj.find("select")

  //remove all options
  $current_que_select.find('option').remove();


  for(i=0;i<$results.length;i++){

    $result = $results[i]["target"]

    console.log($result)

    if(i == 0){
      $ans = $result;
    }

    $current_que_select.append('<option value="' + $result + '">' + $result + '</option>')

  }

  if($results.length == 0){
    add_all_options();
    return '';
  }

  return $ans;

}

function add_all_options_dropdown(){


  $options = $current_que["type"]["options"];
  $current_que_select = $current_que_obj.find("select")
  $current_que_select.find('option').remove();

  for(i in $options){
    $option = $options[i];
    $current_que_select.append('<option value="' + $option +'">' + $option + '</option>')
  }

}

function add_all_options_radio(){

  $current_que_obj.find('.radio-container').remove();
  $id = get_current_question_id();
  $options = $current_que["type"]["options"];

  //has images
  $hasImages = false;
  if("images" in $current_que["type"]){
    $hasImages = true;
    $images = $current_que["type"]["images"];
  }

  for(i in $options){
    $option = $options[i];
    if($hasImages){
      $label = $('<label class="radio-container image-container"><input type="radio" name="' + $id + '" value="' + $option +  '" ans="' + $option + '"></label>').appendTo($current_que_obj);
      $image = $('<img class="radio-image" value="' + $option +  '" src="'+ $images[i] +'">').appendTo($label);
    }
    else{
      $label = $('<label class="radio-container">' + $option + '<input type="radio" name="' + $id + '" value="' + $option +  '" ans="' + $option + '"><span class="checkmark"></span><br></label>').appendTo($current_que_obj);
    }
  }

}

function add_all_options(){

  $type = $current_que["type"]["input"];

  if($type == "dropdown"){
    add_all_options_dropdown()
  }

  if($type == "radio"){
    add_all_options_radio()
  }

}

function valid(){

  if($edit_enabled){
    $text = $edit_result;
  }else{
    $text = $result;
  }

  $validation_fn = eval($current_que['validation']['type']);
  $min = $current_que['validation']['min'];
  $min = parseInt($min, 10);
  $max = $current_que['validation']['max'];
  $max = parseInt($max, 10);
  return $validation_fn($text);
}

function make_node_active(){
  $current_que_id = get_current_question_id()
  $current_que_node = $nodes.find("#" + $current_que_id);

  //remove active
  $nodes.find('div').removeClass("btn--green").addClass("btn--blue");

  //make active
  $current_que_node.removeClass("btn--blue").addClass("btn--green")

}

function set_default(){
  $tries = 0;
  $edit_enabled = false;
  $edit_result = undefined;
  $next_btn.css("display", "none");
  $result = undefined;
  $jumped = false;
}

function jump_que(){
  $current_que = $prev_que;
  $current_que_obj = $prev_que_obj;
  show_que($current_que_obj);
}

function save_and_generate(){
    sessionStorage.setItem('objs', JSON.stringify($answers));

    location.href = "form.html";
    return new Promise(function(resolve, reject){
      resolve();
    });
}

function enable_edit(){
  $next_btn.css("display", "block");
  $edit_enabled = true;
  responsiveVoice.speak("Validation not met, Enter Again!", "Hindi Female");

  $type = $current_que["type"]["input"];

  if($type == "text"){
    $current_que_input = $current_que_obj.find('input');
    $current_que_input.on("input", function() {
      $edit_result = $(this).val();
    });
  }

  else if($type == "radio"){
    $('img').click(function(){
        $('img').removeClass('radio-image-select');
        $(this).addClass('radio-image-select');
        $edit_result = $(this).attr("value")
    });

    $('label').click(function(){
    	$edit_result = $(this).find("input").attr("ans");
    })
  }

  else if($type == "dropdown"){
    $current_que_select = $current_que_obj.find("select")
    $current_que_select.on("select2:select", function(e) {
      $edit_result = $(this).find(':selected').val();
    });
  }
}
