function dictionarySort(dictionaries) {
  // your code below here...
  for (let i = 0; i < dictionaries.length; i++) {
    for (let j = i+1; j < dictionaries.length; j++) {
      if(dictionaries[i][0]>dictionaries[j][0]){
        var temp=dictionaries[i]
        dictionaries[i]=dictionaries[j]
        dictionaries[j]=temp
      }else if(dictionaries[i][0]==dictionaries[j][0]){
        for (let k = 1; k < dictionaries[i].length; k++) {
          if(dictionaries[i][k]>dictionaries[j][k]){
            temp=dictionaries[i]
            dictionaries[i]=dictionaries[j]
            dictionaries[j]=temp
            break
          }
        }
      }
    }
  }
  //return dictionaries
  var result=dictionaries.join(',')
  return result
}


var arrOfWord = ['makan', 'duduk', 'tidur', 'terbang']
console.log(dictionarySort(arrOfWord))

var arrOfWord = ['anggi', 'angga', 'ani', 'adi']
console.log(dictionarySort(arrOfWord))

module.exports = dictionarySort
