function sumFirstAndLastArrayElements(arr){

let firstElement = arr[0];
let lastIndex = arr.length - 1;
let lastElements = arr[lastIndex];
console.log(firstElement + lastElements);


}
let myArr = [11, 58, 69];
sumFirstAndLastArrayElements(myArr);
sumFirstAndLastArrayElements([10, 17, 22, 33]);