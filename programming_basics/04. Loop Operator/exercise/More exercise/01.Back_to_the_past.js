function backToThePast(input){

let inheritedMoney = Number(input[0]);
let year = Number(input[1]);

let ivanchoAge = 18;


for(let i = 1800; i <= year; i++){
    if(i % 2 === 0){
        inheritedMoney -= 12000;
    }else{
        inheritedMoney -= 12000 + (50 * (ivanchoAge + 1));
    }
}

let remainder = inheritedMoney;

if(inheritedMoney >= remainder){
    console.log(`Yes! He will live a carefree life and will have ${(Math.abs(remainder.toFixed(2)))} dollars left.`);
}else {
    console.log(`He will need ${(Math.abs(remainder.toFixed(2)))} dollars to survive.`);
}

}
backToThePast(["100000.15","1808"]);