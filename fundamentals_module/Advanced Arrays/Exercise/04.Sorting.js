function sorting(array) {


    let smaller = [...array].sort((a, b) => a - b);
    let highest = [...array].sort((a, b) => b - a);
    let arr2 = [];

    for (let i = 0; i < highest.length; i++) {
        arr2.push(highest[i]);
        arr2.push(smaller[i]);

    }

    console.log([... new Set(arr2)].join(' '));

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
console.log('---------');
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);