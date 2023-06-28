function ladybugs(input){

let size = Number(input[0]);
let ladybugIndexes = input[1].split(' ');
let field = new Array(size);
let test = 

for (let i = 0; i < ladybugIndexes.length; i++) {
    let indexOfBug = Number(ladybugIndexes[i]);
    if(indexOfBug >= 0 && indexOfBug <= field.length-1) {
        field[indexOfBug] = 1;
    }
} 

for (let i = 2; i < input.length; i++) {
    let commands = input[i].split(' ');
    let startPositions = Number(commands[0]);
    let direction = commands[1];
    let indexProgress = Number(commands[2]);

    if(direction === 'right'){

    } else {

    }

}


}
ladybugs([ 3, '2 0', 'n' ]);
console.log('---------------');
ladybugs([ 3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
console.log('---------------');
ladybugs([ 5, '3', '3 left 2', '1 left -2']);