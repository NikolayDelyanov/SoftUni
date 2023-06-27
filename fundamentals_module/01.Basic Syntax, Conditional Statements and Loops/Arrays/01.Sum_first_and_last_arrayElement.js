function sumFirstAndLastArrayElements(arr){

let firstElement = arr[0];
let lastIndex = arr.length - 1;
let lastElements = arr[lastIndex];
console.log(firstElement + lastElements);


}
let myArr = [11, 58, 69];
sumFirstAndLastArrayElements(myArr);
sumFirstAndLastArrayElements([10, 17, 22, 33]);


let num = [1,10,3];

while (num.length>1) {
    let counter = num.length;

    let curArr = [];

    for (let i = 0; i < num.length; i++) {
        
        if (num[i+1] > num.length-1) {
            continue;
        }
        curArr[i] = num[i]+num[i+1];
         
               
    }
    num = curArr;
}