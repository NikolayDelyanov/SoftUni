function ordrers(str,num){

let totalPrice = 0;
let onePrice = 0;

if(str === 'coffee'){
    onePrice = 1.50;
} else if(str === 'water'){
    onePrice = 1.00;
}else if(str === 'coke'){
    onePrice = 1.40;
}else if(str === 'snacks'){
    onePrice = 2.00;
}

totalPrice = onePrice * num;
console.log(totalPrice.toFixed(2));


}
ordrers("water", 5);
ordrers("coffee", 2);