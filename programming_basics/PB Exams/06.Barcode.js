function Barcode(input){

    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let result = "";
    
    for(let barcode = startNum; barcode <= endNum; barcode++){
        let barcodeString = barcode.toString();
        let evenNumbers = false;
    
        for(let i = 0; i < barcodeString.length; i++){
            if(parseInt(barcodeString[i]) % 2 === 0){
                evenNumbers = true;
                break;
            }
        }

        if(!evenNumbers){
            result += barcode + " ";  
        }
    
    
    }
    
    console.log(result);
    
    }
    Barcode(["2345","6789"]);