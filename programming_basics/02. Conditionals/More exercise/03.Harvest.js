function harvest(input){

let harvestArea = Number(input[0]);
let grapes = Number(input[1]);
let litersOfWine = Number(input[2]);
let numOfWorkers = Number(input[3]);

let totalGrapes = harvestArea * grapes;
let wine = totalGrapes * (40/100);
let oneLiterWine = wine / 2.5;

let remainder = oneLiterWine - litersOfWine;

if(oneLiterWine < litersOfWine){
    console.log(`It will be a tough winter! More ${Math.abs(Math.floor(remainder))} liters wine needed.`);
}else if(wine >= litersOfWine){
    console.log(`Good harvest this year! Total wine: ${Math.floor(oneLiterWine)}`);
    console.log(`${Math.ceil(remainder)} liters left -> ${Math.ceil(remainder / numOfWorkers)} liters per person.`);
}

}
harvest(["650","2","175","3"]);