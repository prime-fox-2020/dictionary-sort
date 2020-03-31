function dictionarySort(dictionaries) {
  // your code below here...
  let result = '';
  for (let i = 0; i < dictionaries.length; i++){
    let sml = dictionaries[i], smlInd = i;
    for (let j = i + 1; j < dictionaries.length; j++){
      if (dictionaries[j] < sml){
        sml = dictionaries[j];
        smlInd = j;
      }
    }
    dictionaries[smlInd] = dictionaries[i];
    dictionaries[i] = sml;
    result == '' ? result += sml: result += ', ' + sml;
  }
  return result;
}

module.exports = dictionarySort
