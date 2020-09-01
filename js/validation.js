function valid_min_max($text){
  return $text.length>=$min && $text.length<=$max;
}

function email($text){
  $text = $text.replace(/ /g,'');
  $text = $text.toLowerCase();
  $text = $text.replace(' dot ', '.').replace(' underscore ', '_');
  $letters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if($text.match($letters))
  {
    return $text;
  }
  else
  {
    return false;
  }
}

function alpha($text){
  $text = $text.replace(/ /g,'');
  $letters = /^[a-zA-Z]+$/;
  if($text.match($letters) && valid_min_max($text))
  {
    return $text;
  }
  else
  {
    return false;
  }
}

function num($text){
  $text = $text.replace(/ /g,'');
  $letters = /^[0-9]+$/;
  if($text.match($letters) && valid_min_max($text))
  {
    return $text;
  }
  else
  {
    return false;
  }
}

function alphanum($text){
  $text = $text.replace(/ /g,'');
  $letters = /^[a-zA-Z0-9]+$/;
  if($text.match($letters) && valid_min_max($text))
  {
    return $text;
  }
  else
  {
    return false;
  }
}

function pancard($text){
  $text = $text.replace(/ /g,'');
  $text = $text.toUpperCase();
  $letters = /^([A-Z]{5})(\d{4})([A-Z]{1})$/;
  if($text.match($letters) && valid_min_max($text)){
    return $text;
  }
  else{
    return false;
  }
}

function date($text){

  function isNum($num){
    return !isNaN($num)
  }

  console.log($text);

  $valid_words = FuzzySet(['january','february','march','april','may','june','july','august','september','october','november','december',
                          'jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'
                        ])

  $words = $text.split(" ");
  $new_text = "";

  for(i in $words){
    $word = $words[i];
    $res = numeral($word).value();
    if($res == null){
      $res = $valid_words.get($word)
      if ($res == null){
        $res = $word;
      }
      else{
        $res = $res[0][1]
      }
    }
    $new_text += $res + " ";
  }

  console.log($new_text);

  $text = new Date($new_text);

  if (isNaN($text.getTime())){ //&& $text.length<=$min && $text.length>=$max) {
    return false;
  }
  else{
    return $text;
  }
}

function options($text){
  $options_set = FuzzySet($current_que["type"]["options"])
  $text = $options_set.get($text);
  if($text){
    $text = $text[0][1];
    console.log($text)
    return $text;
  }
  else
  {
    return false;
  }
}
