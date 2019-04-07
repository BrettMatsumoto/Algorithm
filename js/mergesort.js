function arrayGenerator() {
  let randomArray = [];
  for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 100);
    randomArray.push(randomNumber);
  }
  console.log('testArr:', randomArray)
  return randomArray
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = arr.length / 2;
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid, arr.length);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  let sorted = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sorted.push(leftArr[0]);
      leftArr = leftArr.slice(1);
    }
    sorted.push(rightArr[0]);
    rightArr = rightArr.slice(1);
  }
  while (leftArr.length) {
    sorted.push(leftArr.shift());
  }
  while (rightArr.length) {
    sorted.push(rightArr.shift());
  }
  return sorted;
}
console.log(mergeSort(arrayGenerator()))