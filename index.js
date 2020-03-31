function dictionarySort(dictionaries) {
  // your code below here...
  for (let i = 0; i < dictionaries.length; i++) {
    for (let j = i + 1; j < dictionaries.length; j++) {
      if (dictionaries[i] > dictionaries[j]){
        var swap = dictionaries[i]
        dictionaries[i] = dictionaries[j]
        dictionaries[j] = swap
      }
    }
  }
  return dictionaries
}

var arrOfWords1 = ['makan', 'duduk', 'tidur', 'terbang']
var arrOfWords2 = ['anggi', 'angga', 'ani', 'adi']

console.log(dictionarySort(arrOfWords1))
console.log(dictionarySort(arrOfWords2))

module.exports = dictionarySort


