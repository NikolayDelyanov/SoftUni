function sumEvenNumbers(array) {

    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        array[index] = Number(array[index]);
    }

    for (let num of array) {
        if (num % 2 == 0) {
            sum += num;
        }
    }

    console.log(sum);

}
sumEvenNumbers(['1', '2', '3', '4', '5', '6']);