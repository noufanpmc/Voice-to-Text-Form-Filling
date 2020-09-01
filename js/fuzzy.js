    function resultsToHtml(results) {
      var html = '<ul>'
      for (var i = 0; i < results.length; i++) {
        const result = results[i]
        html += `<li>${result.score} - ${fuzzysort.highlight(result)}</li>`
      }

      html += '</ul>'
      return html
    }

    function add_fuzzy_dropdown(transcript){
		results = fuzzysort.go(transcript.toLowerCase(), $options)
    html = resultsToHtml(results)
    $results.html(html)
	}

