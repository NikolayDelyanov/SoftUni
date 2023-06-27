function arrayRotation(array, rotationCount) {

    for (let i = 0; i < rotationCount; i++) {
        let currElement = array[0];
        array.shift();
        array.push(currElement);
    }

    console.log(array.join(" "));
    
}
arrayRotation([51, 47, 32, 61, 21], 2);
console.log('-------------------');
arrayRotation([32, 21, 61, 1], 4);
console.log('-------------------');
arrayRotation([2, 4, 15, 31], 5);
console.log('-------------------');
