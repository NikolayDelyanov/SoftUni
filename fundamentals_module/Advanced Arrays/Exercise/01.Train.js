function train(input) {
    let numbers = input
        .shift()
        .split(" ")
        .map((x) => Number(x));

    let max = Number(input.shift());

    for (let i = 0; i < input.length; i++) {
        let arrNew = input[i].split(" ");
        let command = arrNew[0];
        let firstValue = arrNew[1];


        if (arrNew.length === 2 && command === "Add") {
            numbers.push(firstValue);
        } else {
            let passengers = Number(arrNew[0]);
            for (let j = 0; j < numbers.length; j++) {
                let currPassenger = numbers[j] + passengers;
                if (currPassenger <= max) {
                    numbers[j] += passengers;
                    break;
                }
            }
        }
    }
    console.log(numbers.join(" "));
}
//       wagons             command command  
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
);

train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6'])