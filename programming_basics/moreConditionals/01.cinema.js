function cinema(input){

let type = input[0];
let lines = Number(input[1]);
let colonies = Number(input[2]);

let income = 0;

if(type == "Premiere"){
    income = lines * colonies * 12.0;
}else if(type == "Normal"){
    income = lines * colonies * 7.50;
}else if(type == "Discount"){
    income = lines * colonies * 5.00;
}
console.log(` ${income.toFixed(2)} leva`);


}
cinema(["Premiere","10","12"]);