function dictionarySort(dictionaries) {
  // your code below here...
  var hasil ='';
  
  for (let i = 0; i < dictionaries.length; i++) {
      for (let j = 0; j < dictionaries.length-1; j++) {
          if(dictionaries[j]>dictionaries[j+1]){
              var temp = dictionaries[j];
              dictionaries[j]=dictionaries[j+1];
              dictionaries[j+1]=temp
          }
      }
  }
  hasil = dictionaries.join(',')

  return hasil
}


console.log(dictionarySort(['makan','duduk','tidur','terbang']))
console.log(dictionarySort(['anggi','angga','ani','adi']))



module.exports = dictionarySort