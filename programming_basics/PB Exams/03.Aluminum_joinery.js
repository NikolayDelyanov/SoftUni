function aluminiumJoinery(input){

let numJoinery = Number(input[0]);
let joinerysSize = input[1];
let shipmentMethod = input[2];

let price = 0;

if(joinerysSize == "90X130"){
    price = numJoinery * 110;

    if(numJoinery > 60){
        price = price - 0.08 * price;
    }else if(numJoinery > 30){
        price = price - 0.05 * price;
    } 

    if(shipmentMethod == "With delivery"){
        price = price + 60.00;
    }

    if(numJoinery > 99){
        price = price - 0.04 * price;
    }else if(numJoinery < 10){
        console.log("Invalid order");

    }

} else if(joinerysSize == "100X150"){
    price = numJoinery * 140;
    if(numJoinery > 80){
        price = price - 0.10 * price;
    }else if(numJoinery > 40){
        price = price - 0.06 * price;
    }

    if(shipmentMethod == "With delivery"){
        price = price + 60.00;
    }

    if(numJoinery > 99){
        price = price - 0.04 * price;
    }else if(numJoinery < 10){
        console.log("Invalid order");
    }

} else if(joinerysSize == "130X180"){
    price = numJoinery * 190;

    if(numJoinery > 50){
        price = price - 0.12 * price;
    }else if(numJoinery > 20){
        price = price - 0.07 * price;
    }

    if(shipmentMethod == "With delivery"){
        price = price + 60.00;
    }

    if(numJoinery > 99){
        price = price - 0.04 * price;
    }else if(numJoinery < 10){
        console.log("Invalid order");
        return;
    }

} else if(joinerysSize == "200X300"){
    price = numJoinery * 250;

    if(numJoinery > 50){
        price = price - 0.14 * price;
    }else if(numJoinery > 25){
        price = price - 0.09 * price;
    }

    if(shipmentMethod == "With delivery"){
        price = price + 60.00;
    }

    if(numJoinery > 99){
        price = price - 0.04 * price;
    }else if(numJoinery < 10){
        console.log("Invalid order");
    }
}

console.log(`${price.toFixed(2)} BGN`);



}
aluminiumJoinery(["2","130X180","With delivery"]);