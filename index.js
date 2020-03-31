function dictionarySort(dictionaries) {
  for(var i = 0; i < dictionaries.length; i++) {
    for(var j = 0; j < dictionaries.length; j++) {
      if(dictionaries[j+1] < dictionaries[j]) {
        var temp = dictionaries[j+1];
        dictionaries[j+1] = dictionaries[j];
        dictionaries[j] = temp;
      }
    }
  }
  var print = '';
  for(var i = 0; i < dictionaries.length; i++) {
    if(i === dictionaries.length - 1) {
      print += dictionaries[i];
    } else {
      print += dictionaries[i] + ', '
    }
  }
  return print;

}
console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']));
console.log(dictionarySort(['angga', 'anggi', 'ani', 'adi']));

module.exports = dictionarySort
