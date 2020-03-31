function dictionarySort(dictionaries) {
  // your code below here...
  for (let i = 0; i < dictionaries.length; i++) {
    for (let k = 0; k < dictionaries.length; k++) {
      if (dictionaries[i] < dictionaries[k]) {
        let stby = dictionaries[i]
        dictionaries[i] = dictionaries[k]
        dictionaries[k] = stby
      }      
    }    
  }
  return dictionaries

}
const test_word_1 = ["makan", "duduk", "tidur", "terbang"];
const test_word_2 = ["anggi", "angga", "ani", "adi"];
console.log(dictionarySort(test_word_1))
console.log(dictionarySort(test_word_2))
module.exports = dictionarySort
