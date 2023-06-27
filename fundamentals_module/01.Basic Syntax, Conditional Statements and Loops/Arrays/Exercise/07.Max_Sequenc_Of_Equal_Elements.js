function maxSequence(arr) {
 
    let longestSequence = [];
    let leftMostIndex = 0;
 
    for (let i = 0; i < arr.length; i++) {

        let currentSequence = [arr[i]];
 
        for (let j = i + 1; j < arr.length; j++) {

            let nextEl = arr[j];
 
            if (nextEl !== arr[i]) {
                break;
            }

            currentSequence.push(nextEl)
        }
 
        if (currentSequence.length > longestSequence.length) {

            longestSequence = [...currentSequence];
        }
    }

    console.log(longestSequence.join(' '));
}
console.log('---------------');
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
console.log('---------------');
maxSequence([1, 1, 1, 2, 3, 1, 3, 3]);
console.log('---------------');
