function arrayGenerator() {
  let randomArray = [];
  for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 10);
    randomArray.push(randomNumber);
  }
  console.log('testArr:', randomArray)
  return randomArray
}

function quickSort(arr) {
  let smaller = [];
  let bigger = [];
  let pivot = [arr.pop()];
  let retArr = smaller + pivot + bigger
  console.log('retArr', retArr)
  // if ()
  for (let i = 0; i < arr.length; i++) {
    if (pivot[0] < arr[i]) {
      bigger.push(arr[i]);
    }
    if (pivot[0] > arr[i]) {
      smaller.push(arr[i]);
    }
  }

  // quickSort(bigger);
  // quickSort(smaller);
  console.log('pivot', pivot);
  console.log('bigger', bigger);
  console.log('smaller', smaller);
  console.log('retArr', retArr)
  return retArr




}
quickSort(arrayGenerator())