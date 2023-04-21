function balance(input){

    let index = 0;
    let command = input[index];
    let sum = 0;

    while(command !== "NoMoreMoney"){
        let increase = Number(command);
        if(increase < 0){
            console.log("Invalid operation!");
            break;
        }
        
        console.log("Increase: " + increase);
        sum += increase;
        index++;
        
    }

    console.log("Total: " + sum);


}
balance(["5.51",
"69.42",
"100",
"NoMoreMoney"]);