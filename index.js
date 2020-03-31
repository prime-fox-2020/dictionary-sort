function dictionarySort(dictionaries) {
  for(let i = 0; i < dictionaries.length; i++){
    let len = dictionaries[i].length
    let swap = dictionaries[i]
    let index = i

    for(let j = i+1; j < dictionaries.length; j++){
      let temp = dictionaries[j].length

      if(dictionaries[i][0] > dictionaries[j][0] || (temp > len && dictionaries[i][0] == dictionaries[j][0])){ 
        len = dictionaries[j].length
        swap = dictionaries[j]
        index = j
      }
      else if(len == temp && dictionaries[i][0] == dictionaries[j][0]){
        for(let k = 1; k < temp; k++){
          if(dictionaries[i][k] > dictionaries[j][k]){
            len = dictionaries[j].length
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
  return dictionaries
}

var arrOfWord = ['makan', 'duduk', 'tidur', 'terbang']
console.log(dictionarySort(arrOfWord))

var arrOfWord = ['anggi', 'angga', 'ani', 'adi']
console.log(dictionarySort(arrOfWord))

module.exports = dictionarySort
