function arrayGenerator() {
  let randomArray = [];
  for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 100);
    randomArray.push(randomNumber);
  }
  console.log('testArr:', randomArray)
  return randomArray
}

function swap(arr, i, j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function selectionSort(arr){
  for(let i = 0; i < arr.length; i++){
    let min = i;
    for (let j = i + 1; j < arr.length; j++){
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min){
      swap (arr, i, min);
    }
  }
  return arr;
}

console.log(selectionSort(arrayGenerator()))