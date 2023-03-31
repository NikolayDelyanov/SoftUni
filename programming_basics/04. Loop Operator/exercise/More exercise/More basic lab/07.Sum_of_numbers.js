function sumOfNumbers(input) {

    let word = input[0];

    let totalValue = 0;
    for (let index = 0; index < word.length; index++) {
        let currentDigit = Number(word.charAt(index));
        totalValue += currentDigit;
    }
    console.log(`The sum of the digits is:${totalValue}`);

}
sumOfNumbers(["1234"]);