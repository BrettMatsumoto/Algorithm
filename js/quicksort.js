function arrayGenerator() {
  let randomArray = [];
  for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 100);
    randomArray.push(randomNumber);
  }
  console.log('testArr:', randomArray)
  return randomArray
}

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];

  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    }
    if (arr[i] > pivot) {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort(arrayGenerator()));


//I understand the concept of these algorithms and what they are supposed to do but I couldn't convert it into code. Besides the arrayGenerator function, none of the code that's doing the sorting is my own creation.