function sequence(input) {

    let num = Number(input[0]);

    let current = 1;
    while (current <= num) {
        console.log(current);
        if (current >= num) {
            break;
        }
        current = (current * 2) + 1;
    }

}
sequence(["31"]);