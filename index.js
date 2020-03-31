function dictionarySort(dictionaries) {
  // your code below here...
  temp = ''
  for(i=0; i<dictionaries.length; i++){
    for(j=0; j<dictionaries.length; j++){
      if(dictionaries[i]<dictionaries[j]){
        temp = dictionaries[j]
        dictionaries[j] = dictionaries[i]
        dictionaries[i] = temp
      }
    }
  }
  hasil = ''
  for(k=0; k<dictionaries.length; k++){
    hasil += dictionaries[k]
    if(k != dictionaries.length-1){
      hasil += ', '
    }
  }
return hasil

}
var arrOfWord = ['makan', 'duduk', 'tidur', 'terbang']
console.log(dictionarySort(arrOfWord))
//‌ ‌Contoh‌ ‌1‌ ‌
//‌ ‌input‌ ‌:‌ ‌

//‌ ‌output‌ ‌:‌ ‌
// duduk,makan,terbang,tidur‌ ‌

//‌ ‌Contoh‌ ‌2‌ ‌
//‌ ‌input‌ ‌:‌ ‌
var arrOfWord = ['anggi', 'angga', 'ani', 'adi']
console.log(dictionarySort(arrOfWord))
// angga,anggi,adi,ani‌
// module.exports = dictionarySort
