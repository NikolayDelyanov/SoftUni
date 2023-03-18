function pipesInPool(input){

let v = Number(input[0]);
let pipe1 = Number(input[1]);
let pipe2 = Number(input[2]);
let hours = Number(input[3]);

let pipe1Volume = pipe1 * hours;
let pipe2Volume = pipe2 * hours;

let totalVolume = (pipe1 + pipe2) * hours;
let remainingVolume =  v - totalVolume;

let procentPipe1 = totalVolume * (pipe1Volume/100);
let procentPipe2 = totalVolume * (pipe2Volume/100);
let poolOccupancy = totalVolume * (v / 100);

console.log(`The pool is ${poolOccupancy.toFixed(2)}% full. Pipe 1: ${procentPipe1.toFixed(2)}%. Pipe 2: ${procentPipe2.toFixed(2)}%.`);




}
pipesInPool(["1000",
"100",
"120",
"3"]);