function backToThePast(input){

let inheritanceMoney = Number(input[0]);
let year = Number(input[1]);

let spentMoney = 0;

for (let index = 1800; index <= year ; index++) {
    let currentAge = 18;

    if(index % 3 === 0){
        inheritanceMoney -= spentMoney;
    }

    if(index % 2 === 0){
        inheritanceMoney -= 12000;
    }else {
        currentAge++;
        spentMoney = 12000 + (50 * currentAge);
        inheritanceMoney -= spentMoney;
    }

}

if(inheritanceMoney > 0){
    console.log(`Yes! He will live a carefree life and will have ${(Math.abs(inheritanceMoney.toFixed(2)))} dollars left.`);
}else{
    console.log(`He will need ${(Math.abs(inheritanceMoney.toFixed(2)))} dollars to survive.`);
}

}
backToThePast(["100000.15","1808"]);