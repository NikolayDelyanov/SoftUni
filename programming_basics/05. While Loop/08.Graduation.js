function graduation(input){

let student = input[0];
let grades = 1;
let index = 0;
let total = 0;

while (grades <= 12){
    index++;
    let grade = Number(input[index]);
    if(grade < 4.00){
        continue;
        
        if(grade < 4.00){
            continue;
            console.log(`${student} has been excluded at ${index} grade`);
            break;
        }
    }
    total+=grade;
    index++;
}

console.log(`${student} graduated. Average grade: ${total / 12}`);


}
graduation(["Gosho","5","5.5","6","5.43", "5.5",
 "6", "5.55", "5", "6", "6", "5.43", "5"]);