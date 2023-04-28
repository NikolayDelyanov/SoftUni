function reportSystem(input){

let sum = Number(input[0]);
let cashPayment = 0;
let cardPayment = 0;
let index = 1;
let command = input[index];
let totalSum = 0;

while(command !== 'End'){

    let transaction = Number(command);
    totalSum += transaction;

    if(index % 2 === 0){
        cashPayment++;

        if(transaction > 100 ){
            console.log("Error in transaction!");
            
        }else{
            console.log("Product sold!");
        }

    }else {
        cardPayment++;

        if(transaction < 10){
            console.log("Error in transaction!");
            
        } else {
            console.log("Product sold!");
        }
    }

    index++;
    command = input[index];

}


}
reportSystem(["500","120","8","63","256","78","317"]);