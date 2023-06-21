function rightPlace(text,charToChange,targetText){

    let newString = '';
    for (let index = 0; index < text.length; index++) {
        if(text[index] === "_"){
            newString = newString + charToChange;
        }else{
            newString += text[index];
        }

    }

    console.log(newString === targetText ? 'Matched' : 'Not Matched');



}
rightPlace('Str_ng', 'I','Strong');