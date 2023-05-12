function bestPlayer(input) {

    let index = 0;
    let command = input[index];
    let bestPlayerGoals = 0;
    let betterPlayer = "";

    while (command !== 'END') {
        let playerName = command;
        let playerGoals = Number(input[index + 1]);

        if (playerGoals > bestPlayerGoals) {
            bestPlayerGoals = playerGoals;
            betterPlayer = playerName;
        }

        if (playerGoals > 10) {
            break;
        }

        index++;
        command = input[index];
    }

    console.log(`${betterPlayer} is the best player!`);
    
    if (bestPlayerGoals >= 3) {
        console.log(`He has scored ${bestPlayerGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${bestPlayerGoals} goals.`);
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