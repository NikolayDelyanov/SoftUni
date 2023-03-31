function backToThePast(input){

let inheritedMoney = Number(input[0]);
let year = Number(input[1]);

let ivanchoAge = 18;

for(let i = 1800; i <= year; i++){
    let currentYear = input[i];
    if(year % 2 === 0){
        inheritedMoney -= 12000;
    }else{
        inheritedMoney -= 12000 + (50 * (ivanchoAge + 1));
    }
}


}
backToThePast(["50000","1802"]);