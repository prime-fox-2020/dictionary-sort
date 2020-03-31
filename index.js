function dictionarySort(dictionaries) {
  for (let i = 0; i < dictionaries.length; i++) {
    let q, min = i;
    for (let j = i; j < dictionaries.length; j++) {
      if (dictionaries[j] < dictionaries[min]) {
        min = j;
      }
    }
    if (min !== i) {
      q = dictionaries[i];
      dictionaries[i] = dictionaries[min];
      dictionaries[min] = q;
    }
  }
  return dictionaries;
}
console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']));
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']));

module.exports = dictionarySort
