function palindrome(arr){

for (let i = 0; i < arr.length; i++) {
    let numToString = String(arr[i]);
    let buff = "";
    for(let j = numToString.length - 1; j >= 0; j--){
        buff += numToString[j];
    }    

    console.log(buff === numToString);
}

}
palindrome([123,323,421,121]);