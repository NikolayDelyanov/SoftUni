function fishTank(input){

let length = Number(input[0]);
let width = Number(input[1]);
let height = Number(input[2]);
let discount = Number(input[3]);

let aquariumVolume = length * width * height;
let litersVolume = aquariumVolume / 1000;
let occupiedSpace = 0.17;
let liters = litersVolume * (1 - occupiedSpace);

console.log(liters);



}
fishTank(["85 ","75 ","47 ","17 "]);