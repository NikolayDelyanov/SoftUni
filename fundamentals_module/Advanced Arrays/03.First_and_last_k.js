function firstLastK(arr) {

    let k = arr.shift();

    let firstK = arr.slice(0, k);
    let secondK = arr.slice(-k);

    console.log(firstK.join(' '));
    console.log(secondK.join(' '));

}
firstLastK([2, 7, 8, 9]);