function dictionarySort(dictionaries) {
  for(let i = 0; i < dictionaries.length; i++){
    let swap = dictionaries[i]
    let len = dictionaries[i].length
    let index = i
    for(let j = i+1; j < dictionaries.length; j++){
      if(dictionaries[i][0] > dictionaries[j][0]){ 
        swap = dictionaries[j]
        index = j
      }
      else if(dictionaries[i][0] == dictionaries[j][0]){
        for(let k = 1; k < len; k++){
          if(dictionaries[i][k] > dictionaries[j][k]){
            swap = dictionaries[j]
            index = j
            break
          }
        }
      }
    }
    dictionaries[index] = dictionaries[i]
    dictionaries[i] = swap
  }
  let result = dictionaries.join(',')
  return result
}

var arrOfWord = ['makan', 'duduk', 'tidur', 'terbang']
console.log(dictionarySort(arrOfWord))

var arrOfWord = ['anggi', 'angga', 'ani', 'adi']
console.log(dictionarySort(arrOfWord))

module.exports = dictionarySort
