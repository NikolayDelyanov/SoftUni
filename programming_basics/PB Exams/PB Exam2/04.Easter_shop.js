function easterShop(input){

let startQuantity = Number(input[0]);
let index = 1;
let command = input[index];
let saveQuantity = startQuantity;
let buyingEggs = 0;

while(command !== 'Close'){

    index++;
    let numOfEggs = Number(input[index]);

    if(command === 'Buy'){
        if(startQuantity < saveQuantity){
            console.log(`Not enough eggs in store!`);
            console.log(`You can buy only ${startQuantity}.`);
            break;
        }
        startQuantity -= numOfEggs;
        buyingEggs += numOfEggs;
    }

    if(command === 'Fill'){
        startQuantity += numOfEggs;
    }


    index++;
    command = input[index];
}

if(command === 'Close'){
    console.log(`Store is closed!`);
    console.log(`${buyingEggs} eggs sold.`);
}


}
easterShop(["13",
"Buy",
"8",
"Fill",
"3",
"Buy",
"10"]);
