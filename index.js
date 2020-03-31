function dictionarySort(dictionaries) {
  // your code below here...
  for(let i = 0; i < dictionaries.length; i++){
    for(let j = 0; j < dictionaries.length - i - 1; j++){
      if(dictionaries[j] > dictionaries[j+1]){
        let tmp = dictionaries[j]
        dictionaries[j] = dictionaries[j+1]
        dictionaries[j+1] = tmp
      }
    }
  }

  let output = ''

  for(let i = 0; i < dictionaries.length; i++){
    if(i === dictionaries.length - 1){
      output += dictionaries[i]
    }else{
      output += dictionaries[i] + ','
    }
  }
  return output
}

console.log(dictionarySort(['makan','duduk','tidur','terbang']))
console.log(dictionarySort(['anggi','angga','ani','adi']))

module.exports = dictionarySort
