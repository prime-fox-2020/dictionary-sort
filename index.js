function dictionarySort(dictionaries) {
  // your code below here...
  let swap
  for (var i = 0; i < dictionaries.length; i++) {
    for (var j = i; j >= 0; j--) {
    
      if (dictionaries[j] < dictionaries[j-1]) {
        swap = dictionaries[j-1]
        dictionaries[j-1] = dictionaries[j]
        dictionaries[j] = swap
        }    
      }

  }
  return dictionaries
}

var arrOfWord = ['makan','duduk','tidur','terbang']
console.log(dictionarySort(arrOfWord).join(','))

module.exports = dictionarySort
