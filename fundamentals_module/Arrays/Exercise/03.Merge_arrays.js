function mergeArrays(firstArray,secondArray){

    let mergedArray = [];
    
    for (let index = 0; index < firstArray.length; index++) {
        if(index % 2 === 0){
            let sum = Number(firstArray[index]) + Number(secondArray[index]);
            mergedArray.push(sum);
        } else {
            let concatenation = firstArray[index] + secondArray[index];
            mergedArray.push(concatenation);
        }
        
    }
    
    console.log(mergedArray.join(' - '));
    
    
    }
    mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']);