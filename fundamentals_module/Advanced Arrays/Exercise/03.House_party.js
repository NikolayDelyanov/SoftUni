function houseParty(input) {

    let myList = [];
    for (let el of input) {
        let commands = el.split(" is ");
        let name = commands[0];
        let command = commands[1];
        if (command === "going!") {
            if (myList.indexOf(name) === -1) {
                myList.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if (myList.indexOf(name) === -1) {
                console.log(`${name} is not in the list!`);
            } else {
                myList.splice(myList.indexOf(name), 1)
            }
        }
    }

    console.log(myList.join("\n"));

}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']);