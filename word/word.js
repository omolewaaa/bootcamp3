function words(string){
	wordList = string.match(/\S+/g);
	count = {};
	len = word.length
	for (let i = 0; i < len; i++) {
		let word = wordList[i];
		if (count[word]) {
			count[word]+= 1;
		}
		else {
			count[word] = 1;
		}
	}
	return count;
}
module.exports = words;
