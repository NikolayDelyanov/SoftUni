function sum(input){

    let firstSum = input.shift();
    let secondSum = input.pop();

    console.log(Number(firstSum) + Number(secondSum));

}
sum(['20', '30', '40'] );