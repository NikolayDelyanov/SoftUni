function palindrome(arr) {

    for (let i = 0; i < arr.length; i++) {
        let numToString = String(arr[i]);
        let buff = numToString.split('').reverse().join('');
         
        console.log(buff === numToString);
    }

}
palindrome([123, 323, 421, 121]);