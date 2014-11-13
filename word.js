
var wordsCollection = [];
var sentence = "  A new  sentence thathasmultiple    spaces in it  3 ";
var position = 0;

function splitSentence(s, i){
    var parts;
    parts = [s.substr(0, i), s.substr(i+1)];
    return parts;
};

function findNextWord(s){
    var index = s.indexOf(' ');
	var sentenceParts;

	if(index >=0){
		sentenceParts = splitSentence(s, index); 
		wordsCollection.push(sentenceParts[0]);
		sentence = sentenceParts[1];
		return true;	
	}else{
     wordsCollection.push(sentence);   
    return false;
	}
};

console.time("concatenation");
while(findNextWord(sentence)){}

console.log(wordsCollection);
console.timeEnd("concatenation");