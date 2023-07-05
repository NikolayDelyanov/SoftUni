function condenseArray(arr){
    while (arr.length > 1) {
    
        let newArr = [];
    
        for (let i = 0; i < arr.length - 1; i++) {

            let currEl = arr[i] + arr[i+1];
            
            newArr.push(currEl);
        }
        arr = newArr;
    }

    console.log(arr[0]);

}
condenseArray([2,10,3]);