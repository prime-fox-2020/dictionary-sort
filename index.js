function dictionarySort(dictionaries) {
  var res ='';
  // your code below here...
  //looping array 
  for(var i =0; i < dictionaries.length; i++){
    for(var j =0; j < dictionaries.length;j++){
      if(dictionaries[j] > dictionaries[j+1]){
        var temp = dictionaries[j]
        dictionaries[j] = dictionaries[j+1]
        dictionaries [j+1]= temp;
      }
    }
  }
  for(var k = 0 ; k <dictionaries.length; k++){
    res+= dictionaries[k]
    if(k !== dictionaries.length -1){
      res+= ','
    }

  }
  return res; 
}

var arrOfWord = ['makan','duduk','tidur','terbang']; // duduk, makan, terbang, tidur 
var arrOfName = ['anggi','angga','ani','adi']; // adi, angga, anggi, ani 

console.log(dictionarySort(arrOfWord))
console.log(dictionarySort(arrOfName))
module.exports = dictionarySort
