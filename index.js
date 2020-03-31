function dictionarySort(dictionaries) {
  // your code below here...
for(var i = 0; i < dictionaries.length; i++){
  for(var j = 0; j < dictionaries.length-1; j++){
    let temp = dictionaries[j]
    if(dictionaries[j] > dictionaries[j+1]){
      dictionaries[j] = dictionaries[j+1]
      dictionaries[j+1] = temp
    }
  }
}

var hasil = String(dictionaries)
return hasil
}

const test_word_1 = ["makan", "duduk", "tidur", "terbang"];
const test_word_2 = ["anggi", "angga", "ani", "adi"];

console.log(dictionarySort(test_word_1))
console.log(dictionarySort(test_word_2))

module.exports = dictionarySort
