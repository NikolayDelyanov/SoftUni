function commonElements(firstArr,secondArr){

    for (let i = 0; i < firstArr.length; i++) {
        for (let y = 0; y < secondArr.length; y++) {
            if(firstArr[i] === secondArr[y]){
                console.log(firstArr[i]);
            }
            
        }

}
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);
console.log("><><><><><><><><><><><><><><><><>");
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']);