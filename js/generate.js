$objs = sessionStorage.getItem('objs');
$objs = JSON.parse($objs)
$formNo = sessionStorage.getItem('formNo');
$timesToAsk = sessionStorage.getItem('timesToAsk');

function add_text(obj){
  $que = obj['question'];
  $id = obj['id'];
  $ans = obj['answer'];
  $div = $('<div class="input-group"><label class="label">' + $que + '</label><input class="input--style-4" type="text" name="' + $id +'"></div>').appendTo('#details');
  $input = $div.find('input');
  $input.val($ans);
}

function add_radio(obj){
  $que = obj['question'];
  $id = obj['id'];
  $ans = obj['answer'];
  $options = obj['options'];

  $div = $('<div class="input-group"><label class="label">' + $que + '</label><div class="p-t-10"></div>').appendTo('#details')

  console.log($ans);
  console.log($options);


  for(i in $options){
    $option = $options[i];
    if($option == $ans){
      $('<label class="radio-container m-r-45">' + $option + '<input type="radio" checked="checked" name="' + $id + '"><span class="checkmark"></span></label></br>').appendTo($div);
    }
    else{
      $('<label class="radio-container">' + $option + '<input type="radio" name="' + $id + '"><span class="checkmark"></span></label></br>').appendTo($div);
    }
  }
}

function add_dropdown(obj){
$que = obj['question'];
  $id = obj['id'];
  $ans = obj['answer'];
  $options = obj['options'];

  $div = $('<div class="input-group"><label class="label">' + $que + '</label><div class="p-t-10"></div>').appendTo('#details')

  console.log($ans);
  console.log($options);


  for(i in $options){
    $option = $options[i];
    if($option == $ans){
      $('<label class="radio-container m-r-45">' + $option + '<input type="radio" checked="checked" name="' + $id + '"><span class="checkmark"></span></label></br>').appendTo($div);
    }
    else{
      $('<label class="radio-container">' + $option + '<input type="radio" name="' + $id + '"><span class="checkmark"></span></label></br>').appendTo($div);
    }
  }
}

function add_date(obj){

  $que = obj['question'];
  $id = obj['id'];
  $ans = obj['answer'];
  $dateString = moment($ans).format('DD/MM/YYYY')

  console.log($dateString)

  $div = $('<div class="input-group"><label class="label">' + $que + '</label><div class="input-group-icon"><input class="input--style-4 js-datepicker" type="text" name="' + $id +'" id="' + $id + '"value = "' + $dateString + '"><i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i></div></div>').appendTo('#details');

  $('#' + $id).daterangepicker({
      "singleDatePicker": true,
      "showDropdowns": true,
      "autoUpdateInput": true,
      locale: {
          format: 'DD/MM/YYYY'
      },
  });
}

function add_submit(){
  $submit = $('<div class="p-t-15"><button class="btn btn--radius-2 btn--blue" type="submit">Next</button></div>').appendTo('#details');

  if($formNo == 9){
    $submit.css("display", "none");
  }

  $submit.click(function(e){
    e.preventDefault();



    if($timesToAsk > 0){
      $timesToAsk = parseInt($timesToAsk) - 1;
      sessionStorage.setItem('timesToAsk', $timesToAsk);
      location.href = "ask.html?form=" + $formNo;
    }else{
      $nextFormNo = parseInt($formNo) + 1;
      if($nextFormNo == 3 || $nextFormNo == 4){
          location.href = "ask.html?multiple=" + $nextFormNo;
      }else{
        $timesToAsk = 0;
        sessionStorage.setItem('timesToAsk', $timesToAsk);
        location.href = "ask.html?form=" + $nextFormNo;
      }
    }
  });
}

function add(){
  for(i in $objs){
    $obj = $objs[i];

    if(!$obj){
      continue;
    }

    console.log(i);

    $obj['id'] = i;
    $type = $obj['type'];

    add_fn = eval('add_' + $type);
    add_fn($obj);
  }

  add_submit();
}

add();
