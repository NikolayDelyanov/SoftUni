function easterTrip(input){

let destination = input[0];
let dates = input[1];
let nights = Number(input[2]);

let priceForNight = 0;
let totalPrice = 0;

switch(destination){
    case 'Germany':
        if(dates === "21-23"){
            priceForNight = 32;
        } else if(dates === "24-27"){
            priceForNight = 37;
        } else if(dates === "28-31"){
            priceForNight = 43;
        }
        totalPrice = nights * priceForNight;
        break;
    case 'Italy':
        if(dates === "21-23"){
            priceForNight = 28;
        } else if(dates === "24-27"){
            priceForNight = 32;
        } else if(dates === "28-31"){
            priceForNight = 39;
        }
        totalPrice = nights * priceForNight;
        break;
    case 'France':
        if(dates === "21-23"){
            priceForNight = 30;
        } else if(dates === "24-27"){
            priceForNight = 35;
        } else if(dates === "28-31"){
            priceForNight = 40;
        }
        totalPrice = nights * priceForNight;
        break;
}

console.log(`Easter trip to ${destination} : ${totalPrice.toFixed(2)} leva.`);

}
easterTrip(["Germany",
"24-27",
"5"]);
