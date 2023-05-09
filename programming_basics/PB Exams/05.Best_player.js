function bestPlayer(input) {

    let index = 0;
    let command = input[index];
    let bestPlayer = '';
    let maxGoals = 0;
    let currentGoals = false;

    while (command !== 'END') {
        index++;
        let goals = Number(input[index]);
        maxGoals = goals;

        if (goals < maxGoals) {
            maxGoals = goals;
            bestPlayer = command;
            console.log(`${bestPlayer} is the best player!`);
        }

        if (goals >= 3) {
            console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
        } else {
            console.log(`He has scored ${maxGoals} goals.`);
        }

        if (goals >= 10) {
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