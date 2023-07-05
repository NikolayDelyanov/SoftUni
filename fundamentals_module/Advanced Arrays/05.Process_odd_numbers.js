function processOddNums(arr) {


    console.log(arr.filter((x, i) => i % 2 == 1).map(x => x * 2).reverse().join(' '));

}
processOddNums([10, 15, 20, 25]);

processOddNums([3, 0, 10, 4, 7, 3]);