function dictionarySort(dictionaries) {
  // your code below here...
  for(let i = 0; i < dictionaries.length; i++){
    let indexOfMin = i
    for(let j = i + 1; j < dictionaries.length; j++){ //mencari index dari nilai minimum
      if(dictionaries[j] < dictionaries[indexOfMin]){
        indexOfMin = j
      }
    }
    //di-swap nilai minimum dipindahin ke index i
    let tmp = dictionaries[i]
    dictionaries[i] = dictionaries[indexOfMin]
    dictionaries[indexOfMin] = tmp
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
