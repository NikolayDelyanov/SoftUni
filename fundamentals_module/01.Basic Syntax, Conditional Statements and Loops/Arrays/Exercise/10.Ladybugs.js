function ladybugs(input){

let size = Number(input[0]); // 1.Първият елемент е дължина на полето
let ladybugIndexes = input[1].split(' '); // Вторият елемент са  индексите на всички калинки които ще бъдат на полето
let field = new Array(size); // 3. Field съдържа индексите на калинките
  
// Попълваме полето с индексите на калинките
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
    let flyLength = Number(commands[2]);


    if(direction === 'right'){
      for (let i = startPositions; i < field.length; i++) {
        field[startPositions] = 0;
        if( field[i + flyLength] !== 1 && i + flyLength < field.length - 1){
            field[i+flyLength] = 1;

            console.log(typeof(field));
        }    
      }
    } else {
        for (let i = startPositions; i < field.length; i--) {
            field[startPositions] = 0;
            if()
            
        }
    }

}
   console.log(field.join(' '));
}
ladybugs([ 3, '0 1',
'0 right 1',
'2 right 1' ]);
console.log('---------------');
ladybugs([ 3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
console.log('---------------');
ladybugs([ 5, '3', '3 left 2', '1 left -2']);