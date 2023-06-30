function muchPower(number, power){

    let result = 1;

for(let i = 1; i <= power; i++){
    result *= number;
}

console.log(result);

}
muchPower(2,8);
muchPower(3,4)