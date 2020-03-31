function dictionarySort(dictionaries) {
  var temp = '';

  for (var i=dictionaries.length-1; i>=0; i--) {
    for (var j=0; j<dictionaries.length;j++) {
      if (dictionaries[j]>dictionaries[j+1]) {
        temp = dictionaries[j];
        dictionaries[j] = dictionaries[j+1];
        dictionaries[j+1] = temp;
      }
    }
  }

  var hasil = '';

  for (var i=0; i<dictionaries.length; i++) {
    if (i!==dictionaries.length-1) {
      hasil+=dictionaries[i] + ', ';
    } else {
      hasil+=dictionaries[i];
    }
  }

  return hasil;

}

// console.log(dictionarySort(['makan','duduk','tidur','terbang']));
console.log(dictionarySort(['anggi','angga','ani','adi']));


module.exports = dictionarySort
