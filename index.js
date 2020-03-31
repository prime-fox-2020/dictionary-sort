function dictionarySort(dictionaries) {
  // your code below here...
  for (i = 0; i < dictionaries.length; i++) {
    for (j = 0; j < dictionaries.length; j++) {
      if (dictionaries[i] < dictionaries[j]) {
        var temp = dictionaries[j]
        dictionaries[j] = dictionaries[i]
        dictionaries[i] = temp 

      }
    }
  }
  
  var dict = ''
  for (k = 0; k < dictionaries.length; k++) {
    if (k !== dictionaries.length - 1) {
      dict += dictionaries[k] + ', '
    } else {
      dict += dictionaries[k]
    }
  }
  return dict
}

var arrOfWord1 = ['makan', 'duduk', 'tidur', 'terbang']
console.log(dictionarySort(arrOfWord1));

var arrOfWord2 = ['anggi', 'angga', 'ani', 'adi']
console.log(dictionarySort(arrOfWord2));


module.exports = dictionarySort
