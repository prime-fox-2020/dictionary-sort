function dictionarySort(dictionaries) {
  // your code below here...
  for(let i=0; i<dictionaries.length; i++){
    for(let j=i+1; j<dictionaries.length; j++){
      if(dictionaries[i] > dictionaries[j]){
        let temp = dictionaries[i]
        dictionaries[i] = dictionaries[j]
        dictionaries[j] = temp
      }
    }
  }

  return String(dictionaries)

}

var arrOfWord = ['makan', 'duduk', 'tidur', 'terbang']
console.log(dictionarySort(arrOfWord))

var arrOfWord2 = ['anggi', 'angga', 'ani', 'adi']
console.log(dictionarySort(arrOfWord2))

module.exports = dictionarySort
