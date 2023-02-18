function vacantionBookList (input) {

let numOfPages = Number(input[0]);
let pages = Number(input[1]);
let numOfDays = Number(input[2]);

let totalTime = numOfPages / pages;
let dayHours = totalTime / numOfDays;

console.log(dayHours);


}
vacantionBookList(["212 ","20 ","2 "]);