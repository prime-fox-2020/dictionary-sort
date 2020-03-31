function dictionarySort(dictionaries) {
  for (let i = 0; i < dictionaries.length; i++) {
    for (let j = i + 1; j < dictionaries.length; j++) {
      if (dictionaries[j] < dictionaries[i]) {
        let swap = dictionaries[j];
        dictionaries[j] = dictionaries[i];
        dictionaries[i] = swap;
      }
    }
  }

  var result = '';
  for (let k = 0; k < dictionaries.length; k++) {
    if (k === dictionaries.length - 1) {
      result += dictionaries[k];
    } else {
      result += dictionaries[k] + ',';
    }
  }
  return result;
}

const dictionary1 = ['makan', 'minum', 'lari', 'ngoding', 'tidur', 'belajar'];
const dictionary2 = ['anggi', 'angga', 'ani', 'adi']

console.log(dictionarySort(dictionary1));
console.log(dictionarySort(dictionary2));

module.exports = dictionarySort;
