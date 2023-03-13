function trekkingMania(input){

let numOfGroups = Number(input[0]);
let numOfPeople = Number(input[1]);

let top = 0;
let procent = 0;

for(let i = 1; i <= input.length; i++){
    
    let totalNumOfPeople = input[i];
    
    if(numOfPeople < 6){
        top = 'Musala';
        procent = procent *(totalNumOfPeople / 100);
    }else if(numOfPeople <= 12){
        top = 'Monblan';
        procent = procent *(totalNumOfPeople / 100);
    }else if(numOfPeople <= 25){
        top = 'Kilimandjaro';
        procent = procent *(totalNumOfPeople / 100);
    }else if(numOfPeople <= 40){
        top = 'K2';
        procent = procent *(totalNumOfPeople / 100);
    }else if(numOfPeople >= 41){
        top = 'Everest';
        procent = procent *(totalNumOfPeople / 100);
    }
}

console.log(`${input[i]} ${procent.toFixed(2)}`);
console.log(`${input[i]} ${procent.toFixed(2)}`);
console.log(`${input[i]} ${procent.toFixed(2)}`);
console.log(`${input[i]} ${procent.toFixed(2)}`);
console.log(`${input[i]} ${procent.toFixed(2)}`);

}
trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26", 
"17",
"37",
"40",
"78"]);