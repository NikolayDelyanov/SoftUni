function logisticts(input) {

let loadsNum = Number(input[0]);
let tonnage = 0;

let totalWeight = 0;
let microbusWeight = 0;
let truckWeight = 0;
let trainWeight = 0;

for (let index = 1; index < input.length; index++) {
    let weigth = Number(input[index]);
    totalWeight += parseInt(weigth);

    if(weigth <= 3){
        microbusWeight += parseInt(weigth);
    }else if(weigth >= 4 && weigth <= 11){
        truckWeight += parseInt(weigth);
    }else {
        trainWeight += parseInt(weigth);

    }
   
}

}
logisticts(["4", "1", "5", "16", "3"]);