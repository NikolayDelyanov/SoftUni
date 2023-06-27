function addAndSubtract(array){

let modifiedArray = [];
let originalSum = array.reduce((a,b) => a+b,0);
let modifiedSum = 0;

for (let index = 0; index < array.length; index++) {
    let number = array[index];
    
    let modifiedNum = 0;

    if(number % 2 === 0){
         modifiedNum = number + index;
        modifiedArray.push(modifiedNum);
        modifiedSum += modifiedNum;
    }else {
        modifiedNum = number - index;
        modifiedArray.push(modifiedNum);
        modifiedSum += modifiedNum;    
    }  

}

console.log(modifiedArray);
console.log(originalSum);
console.log(modifiedSum);


}
addAndSubtract([5, 15, 23, 56, 35]);