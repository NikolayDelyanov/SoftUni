function search(arr1, arr2) {

    let count = 0;
    let elements = arr2[2];

    let arr = arr1.slice(0, arr2[0]);
    arr = arr.slice(arr2[1], arr.length);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elements) {
            count++;
        }
    }

    console.log(`Number ${elements} occurs ${count} times.`);

}
search([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);