function bombNumbers(arr1, arr2) {

    let specialBombNum = arr2.shift();
    let powerBomb = arr2.shift();

    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] === specialBombNum) {


            let lowerRange = i - powerBomb;
            let bombCount = 1 + (powerBomb * 2);

            while (lowerRange < 0) {
                lowerRange++;
                bombCount--;
            }

            arr1.splice(lowerRange, bombCount);
            i--;
        }

    }

    let reducer = (a, b) => a + b;
    console.log(arr1.reduce(reducer));
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]);