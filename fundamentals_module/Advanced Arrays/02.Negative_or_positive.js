function negativeOrPositive(array){

let result = [];

for(let element of array){
    element = Number(element);
    if(element < 0){
        result.unshift(element);
    } else {
        result.push(element);
    }
}

for(let element of result){
    console.log(element);
}


}
negativeOrPositive(['7', '-2', '8', '9']);
console.log('-----------');
negativeOrPositive(['3', '-2', '0', '-1']);