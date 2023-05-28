function numbers(n){

for(let row = 1; row <= n; row++){
    let buff = "";
    for(let col = 0; col < row; col++){
        buff += row + " ";
    }
    console.log(buff);
}


}
numbers(9);
console.log("---------------------");
numbers(15);
console.log("---------------------");
numbers(45);