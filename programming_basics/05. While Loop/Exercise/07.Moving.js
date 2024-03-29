function moving(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let freeSpace = width * length * height;
    let index = 3;
    let command = input[index];
    let cartonsNum = 0;

    while (command !== 'Done') {

        let cartonSpace = Number(command);
        cartonsNum += cartonSpace;

        if (freeSpace < cartonsNum) {
            console.log(`No more free space! You need ${cartonsNum - freeSpace} Cubic meters more.`);
            break;
        }

        index++;
        command = input[index];

    }

    if (command === 'Done' && freeSpace > cartonsNum) {
        console.log(`${freeSpace - cartonsNum} Cubic meters left.`);
    }

}
moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"]);