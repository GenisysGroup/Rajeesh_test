console.time('Function #1');
var wordsCollection = [];

function splitSentence(sentence){
	var re = /\s* \s*/;
	wordsCollection = sentence.trim().split(re);
	console.log(wordsCollection)	
	return wordsCollection;	
}

console.timeEnd('Function #1')