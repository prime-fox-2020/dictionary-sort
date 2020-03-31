function dictionarySort(dictionaries) {
  // your code below here...
  for (var i = 1; i<dictionaries.length; i++){
    for (var j = 0; j<i; j++){
        if (dictionaries[j] > dictionaries[i]){
            var temp = dictionaries[j]
            dictionaries[j] = dictionaries[i]
            dictionaries[i] = temp
        }
    }
  }
  return String(dictionaries)
}

var arrOfWord = ['makan','duduk','tidur','terbang']
console.log(dictionarySort(arrOfWord))
var arr = ['anggi','angga','ani','adi']
console.log(dictionarySort(arr))

module.exports = dictionarySort
