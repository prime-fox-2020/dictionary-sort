function dictionarySort(dictionaries) {
  // your code below here...
  for (let i = 0; i < dictionaries.length; i++) {
    for (let j = i + 1; j < dictionaries.length; j++) {
      if(dictionaries[i] > dictionaries[j]){
        let temp = dictionaries[i]
        dictionaries[i] = dictionaries[j]
        dictionaries[j] = temp
      }
    }
  }
  return dictionaries
}

var arrOfWord1 = [ 'makan', 'duduk', 'tidur', 'terbang' ]
var arrOfWord2 = [ 'anggi', 'angga', 'ani', 'adi' ]

console.log(dictionarySort(arrOfWord1))
// [ 'duduk', 'makan', 'terbang', 'tidur' ]

console.log(dictionarySort(arrOfWord2))
// [ 'adi', 'angga', 'anggi', 'ani' ]

module.exports = dictionarySort
