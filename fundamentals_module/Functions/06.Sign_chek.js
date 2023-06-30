function signChek(num1,num2,num3){

let negative = 0;

if(num1 < 0){
    negative++;
}

if(num2 < 0){
    negative++;
}

if(num3 < 0){
    negative++;
}

if(negative % 2 === 0){
    console.log('Positive');
} else {
    console.log('Negative');
}

}
signChek(5,

    12,
    
    -15);