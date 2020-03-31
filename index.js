function dictionarySort(dictionaries) {
  // your code below here...
  for (var i = 0; i < dictionaries.length; i++) {
    for (var j = 0; j < dictionaries.length; j++) {
      if (dictionaries[j] > dictionaries[j + 1]) {
        // ditukar tempatnya jika value dari j lebih besar dari j+1
        [dictionaries[j], dictionaries[j + 1]] = [dictionaries[j + 1], dictionaries[j]]
      }
    }
  }
  return dictionaries.join(',')
}
var arrOfWord1 = ['makan', 'duduk', 'tidur', 'terbang']
var arrOfWord2 = ['anggi', 'angga', 'ani', 'adi']

console.log(dictionarySort(arrOfWord1));
console.log(dictionarySort(arrOfWord2));

module.exports = dictionarySort
