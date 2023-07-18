function rotate(arr){

    let rotations = +arr[arr.length - 1];
    arr.pop();
    for(let i = 1; i <= rotations; i++)
    {
        let current = arr.pop();
        arr.unshift(current);
    }
    console.log(arr.join(' '));
}
rotate(['1', '2', '3', '4', '2']);
console.log('--------');
rotate(['Banana', 'Orange', 'Coconut','Apple', '15']);