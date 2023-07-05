function evenAndOddSubtractions(array) {

    let evenSum = 0;
    let oddSum = 0;

    for (let index = 0; index < array.length; index++) {
        array[index] = Number(array[index]);
    }

    for (let num of array) {
        if (num % 2 == 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    console.log(evenSum - oddSum);
}
evenAndOddSubtractions([1, 2, 3, 4, 5, 6]);