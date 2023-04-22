function minNumber(input) {

    let index = 0;
    let command = input[index];
    let min = command;

    while (command !== "Stop") {
        min = Number(min);
        let value = Number(command);
        if (min > value) {
            min = value;
        }
        index++;
        command = input[index];

    }

    console.log(min);

}
minNumber(["100",
    "99",
    "80",
    "70",
    "Stop"]);