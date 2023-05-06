function bestPlayer(input){

let index = 0;
let command = input[index];
let bestPlayer = '';
let totalGoals = 0;

while(command !== 'END'){
    index++;
    let goals = Number(input[index]);

    if(goals > totalGoals){
        totalGoals = goals;
        bestPlayer = command;
        console.log(`${bestPlayer} is the best player!`);
    }

    if(goals >= 3){
        console.log(`He has scored ${totalGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${totalGoals} goals.`);
    }

    if(goals >= 10){
        break;
    }


    index++;
    command = input[index];

}



}
bestPlayer(["Neymar",
    "2",
    "Ronaldo",
    "1",
    "Messi",
    "3",
    "END"
    ]);