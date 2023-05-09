function bestPlayer(input) {

    let index = 0;
    let command = input[index];
    let bestPlayer = '';
    let maxGoals = 0;

    while (command !== 'END') {
        index++;
        let futtballerGoals = Number(input[index]);
        maxGoals += futtballerGoals;

        if (futtballerGoals < maxGoals) {
            maxGoals = futtballerGoals;
            bestPlayer = command;
            console.log(`${bestPlayer} is the best player!`);
        }

        if (maxGoals >= 3) {
            console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
        } else {
            console.log(`He has scored ${maxGoals} goals.`);
        }

        if (futtballerGoals >= 10) {
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