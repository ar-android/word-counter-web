$('#content').bind('input propertychange', function() {
	var result = word_count(this.value);
	$('#result').text(result.words + "\n" + result.chars);
});

function word_count(text) {
	var words = text.split(" "), chars = text;
    
    for (var i = 0; i < words.length; i++) {
      while (words[i] === "") {
        words.splice(i, 1);
      }
    }

    return {
    	words: words.length + " word",
    	chars: chars.length + " character"
    }
}

