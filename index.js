function dictionarySort(dictionaries) {
  // your code below here...
  for (let i = 0; i < dictionaries.length; i++) {
      let min = i;
      for (let j = i + 1; j < dictionaries.length; j++) {
          if (dictionaries[min] > dictionaries[j]) {
              min = j;
          }
      }
      if (min !== i) {
          let tmp = dictionaries[i];
          dictionaries[i] = dictionaries[min];
          dictionaries[min] = tmp;
      }
  }
  return dictionaries;
}

var arrOfWords = ['makan', 'duduk', 'tidur', 'terbang'];
console.log(dictionarySort(arrOfWords))
module.exports = dictionarySort
