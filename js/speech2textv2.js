$speech_result = '';
$transcript = '';

if('webkitSpeechRecognition' in window)
{
    speechRecognizer = new webkitSpeechRecognition();
    speechRecognizer.continuous = true;
    speechRecognizer.interimResults = true;
    speechRecognizer.lang = 'en-IN';
}

// on error
speechRecognizer.onerror = function(event) {
    console.log(event.error);
}

// on start
speechRecognizer.onstart = function() {
  $status = "started";
  console.log("started");
}

// on end
speechRecognizer.onend = function() {
  console.log("ended");
  user_ended();
}

// on result
speechRecognizer.onresult = function(event){
    console.log(event.results);

    $final_transcripts = '';
    $interim_transcripts = '';

    for (var i = event.resultIndex; i < event.results.length; i++)
    {

        // transcript holds intermediate
        $transcript = event.results[i][0].transcript;
        console.log($transcript);

        // if final, i.e end of the speech
        if (event.results[i].isFinal)
        {
            $final_transcripts += $transcript;

            //speech result holds the final text value
            $speechresult = $final_transcripts;
            $status = "user ended"
            speechRecognizer.stop();
            final_updates();

        }
        else
        {
            $interim_transcripts += $transcript;
            interim_updates();
        }
    }
}
