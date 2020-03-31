function dictionarySort(dictionaries) {
  // your code below here...
  for (let i = 0; i < dictionaries.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dictionaries[i] < dictionaries[j]) {
        let temp = dictionaries[i]
        dictionaries[i] = dictionaries[j]
        dictionaries[j] = temp
      }
    }
  }

  return dictionaries.join(', ')
}

console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']));
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']));

module.exports = dictionarySort
