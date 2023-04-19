function sumNumbers(input) {

    let num = Number(input[0]);
    let sum = 0;

    let index = 1;
    while (index < input.length) {
        sum += Number(input[index]);
        if (sum >= num) {
            break;
        }
        index++;
    }
    console.log(sum);

}
sumNumbers(["100", "10", "20", "30", "40"]);
