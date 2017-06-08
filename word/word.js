function words (str){
  let Count = {}, splitStr;
  splitStr = str.split(/[\s]+/);
  splitStr.forEach(function(word) {
    if(Count.hasOwnProperty(word)) {
      Count[word]++;
    } else {
      Count[word] = 1;
    }
  });
  return Count;
}
module.exports = words;
