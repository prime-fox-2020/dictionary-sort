function dictionarySort(dictionaries) {
  // your code below here...
  const sort = n => {
    let f = 0;
    for (let min, i=0;i<n.length; i++) {
      if (n[i] > n[i+1]) {
        min = n[i+1];
        n[i+1] = n[i];
        n[i] = min;
        f++;
      }
    }
    return f == 0 ? n:sort(n)
  }

  return sort(dictionaries).toString().split(',').join(', ');
}

module.exports = dictionarySort
