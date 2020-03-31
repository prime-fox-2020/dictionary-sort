function dictionarySort(dictionaries) {
  let temp = [];

  for (let i = 0; i < dictionaries.length; i++) {
    for(let j = 0; j < dictionaries.length; j++) {
      if (dictionaries[j] > dictionaries[j+1]) {
        temp = dictionaries[j];
        dictionaries[j] = dictionaries[j+1];
        dictionaries[j+1] = temp;
      }
    }
  }
return dictionaries.toString();
}




let arrOfWord = ["makan","duduk","tidur","terbang"];
let arrOfWord2 = ["anggi","angga","ani","adi"];
console.log(dictionarySort(arrOfWord));
console.log(dictionarySort(arrOfWord2));
module.exports = dictionarySort
