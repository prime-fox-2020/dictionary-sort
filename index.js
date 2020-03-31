function dictionarySort(whatever) {
  // your code below here...
  for (let i = 0; i < whatever.length; i++) {
    for (let j = i + 1; j < whatever.length; j++) {
      if (whatever[j] < whatever[i]) {
        let swap = whatever[j];
        whatever[j] = whatever[i];
        whatever[i] = swap;
      }
    }
  }

  var result = '';
  for (let k = 0; k < whatever.length; k++) {
    if (k === whatever.length - 1) {
      result += whatever[k];
    } else {
      result += whatever[k] + ',';
    }
  }
  return result;
}

const arrofwords1 = ['belajar terus', 'nga-makan', 'nga-tidur', 'nga-pacaran', 'nga-lulus'];
const arrofwords2 = ['anggi', 'angga', 'ani', 'adi']

console.log(dictionarySort(arrofwords1));
console.log(dictionarySort(arrofwords2));

module.exports = dictionarySort;