function average(input) {

    let n = Number(input[0]);
    let sum = 0;
    let result = 0;

    for (let index = 1; index < input.length; index++) {
        let element = Number(input[index])
        sum += element;
        result = (sum / n);
    }

    console.log(result.toFixed(2));


}
average(["4", "3", "2", "4", "2"]);
