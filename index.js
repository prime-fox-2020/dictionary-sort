function dictionariesSort(dictionaries) {
  // your code below here...
  for(let i = 0; i < dictionaries.length; i++) {
    let min = i
    for(let j = i+1; j < dictionaries.length; j++) {
        if(dictionaries[j] < dictionaries[min]) {
            min = j
        }
    }
    let swapped = dictionaries[min]
    dictionaries[min] = dictionaries[i]
    dictionaries[i] = swapped
  }
  return dictionaries
}

let arr = ['makan', 'duduk', 'tidur', 'terbang']
// duduk, makan, terbang, tidur
console.log(dictionariesSort(arr))

let arr2 = ['anggi', 'angga', 'ani', 'adi']
// adi, angga, anggi, ani
console.log(dictionariesSort(arr2))



module.exports = dictionariesSort
