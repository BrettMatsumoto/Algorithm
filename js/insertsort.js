function arrayGenerator() {
  let randomArray = [];
  for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 100);
    randomArray.push(randomNumber);
  }
  console.log('testArr:', randomArray)
  return randomArray
}

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j+1] = arr[j];
      j--
    }
    arr[j + 1] = temp;
  }
  return arr
}

console.log(insertionSort(arrayGenerator()));

//I understand the concept of these algorithms and what they are supposed to do but I couldn't convert it into code. Besides the arrayGenerator function, none of the code that's doing the sorting is my own creation.