function maxNumbers(input) {

    let arr = input;
    let arr2 = [];
    let maxNum = 0;

    for (let i = 0; i < arr.length; i++) {
        maxNum = Math.max(...arr);
        if (arr[i] === maxNum) {
            arr2.push(maxNum);
            arr[i] = 0;
        }
    }
    let onlyUniqueNums = [...new Set(arr2)];

    console.log(onlyUniqueNums.join(" "));

}
maxNumbers([1, 4, 3, 2]);
console.log('-----------------');
maxNumbers([41, 41, 34, 20]);
console.log('-----------------');
maxNumbers([27, 19, 42, 2, 13, 45, 48]); 