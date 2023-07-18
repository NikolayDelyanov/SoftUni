function nonDecreasingSubset(arr) {
    console.log(arr.filter((el, index) => el >= Math.max(...arr.slice(0, index))).join(' '));
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
console.log('---------');
nonDecreasingSubset([1, 2, 3, 4]);
console.log('---------');
nonDecreasingSubset([20, 3, 2, 15, 6, 1]);