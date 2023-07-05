function manipulations(commands){

let arr = commands.shift().split(' ').map(Number);

for (let i = 0; i < commands.length; i++) {
    let [command , firstNum , secondNum] = commands[i].split(' ');

    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    switch(command){
        case 'Add':
            add(firstNum,secondNum);
            break;
        case 'Remove':
            remove(firstNum,secondNum);
            break;
        case 'RemoveAt':
            removeat(firstNum,secondNum);
            break;
        case 'Insert':
            insert(firstNum,secondNum);
            break;
    }

   
}

function add(el){
    arr.push(el);
}

function remove(num){
    arr = arr.filter(el => el !== num);
}

function removeat(index){
    arr.splice(index,1);
}

function insert(num, index){
    arr.splice(index,0,num);
}

console.log(arr.join(' '));
}
manipulations(['6 12 2 65 6 42','Add 8','Remove 12','RemoveAt 3','Insert 6 2']);