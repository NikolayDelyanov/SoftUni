function sorting(array) {

    let arr2 = [];

    array.sort((a,b) => b-a);

    while(array.length >0) {
        arr2.push(array.shift());
        arr2.push(array.pop());
    }

    console.log(arr2.join(' '));

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
console.log('---------');
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);