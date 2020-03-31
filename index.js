function dictionarySort(dictionaries) {
  // your code below here...
  for (let i = 0; i < dictionaries.length; i++){
    for (let j = 0; j < dictionaries.length; j++){
      if (dictionaries[i] < dictionaries[j]){
        let temp = dictionaries[i]
        dictionaries[i] = dictionaries[j]
        dictionaries[j] = temp
      }
    }
  }
  return dictionaries
}

module.exports = dictionarySort
