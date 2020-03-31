function dictionarySort(dictionaries) {
  // Bubble short
  for (let i = 0; i < dictionaries.length - 1; i++) {
    for (let j = 0; j < dictionaries.length - 1 - i; j++) {
      if (dictionaries[j] > dictionaries[j + 1]) {
        debugger;
        let temp = dictionaries[j];
        dictionaries[j] = dictionaries[j + 1];
        dictionaries[j + 1] = temp;
      }
    }
  }
  return dictionaries;
}
console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']));
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']));
module.exports = dictionarySort