function dictionarySort(dictionaries) {
  // your code below here...
  var temp = '';
  for (a = 0; a < dictionaries.length; a++) {
    for (b = 0; b < dictionaries.length; b++) {
      if (dictionaries[a] < dictionaries[b]) {
        temp = dictionaries[b];
        dictionaries[b] = dictionaries[a];
        dictionaries[a] = temp;
      }
    }
  }
  var hasil = '';
  for (c = 0; c < dictionaries.length; c++) {
    hasil += dictionaries[c];
    if (c != dictionaries.length - 1) {
      hasil += ',';
    }
  }
  return hasil;
}

//‌ ‌Contoh‌ ‌1‌ ‌
//‌ ‌input‌ ‌:‌ ‌
var arrOfWord1 = ['makan', 'duduk', 'tidur', 'terbang']
console.log(dictionarySort(arrOfWord1))
//‌ ‌output‌ ‌:‌ ‌
// duduk,makan,terbang,tidur‌ ‌

//‌ ‌Contoh‌ ‌2‌ ‌
//‌ ‌input‌ ‌:‌ ‌
var arrOfWord2 = ['anggi', 'angga', 'ani', 'adi']
console.log(dictionarySort(arrOfWord2))
// output :
// angga,anggi,adi,ani‌


module.exports = dictionarySort
