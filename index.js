function dictionarySort(dictionaries) {
  for (var i = 0; i < dictionaries.length; i++) {
    var idx = i;
    for (var j = i; j < dictionaries.length; j++) {
      if (dictionaries[j] < dictionaries[idx]) {
        idx = j;
      }
    }
    var temp = dictionaries[i];
    dictionaries[i] = dictionaries[idx];
    dictionaries[idx] = temp;
  }

  return dictionaries.join();
}

module.exports = dictionarySort
