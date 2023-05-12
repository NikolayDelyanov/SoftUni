function easterEggs(input) {

    let numPaintedEggs = Number(input[0]);

    let red = 0;
    let orange = 0;
    let blue = 0;
    let green = 0;
    let maxCounter = Number.MIN_SAFE_INTEGER;
    let maxEggs = "";

    for (let index = 1; index <= input.length; index++) {
        let paint = input[index];

        if (paint === "red") {
            red++;
        } else if (paint === "orange") {
            orange++;
        } else if (paint === "blue") {
            blue++;
        } else if (paint === "green") {
            green++;
        }

        if (maxCounter < red) {
            maxCounter = red;
            maxEggs = "red";
        } else if (maxCounter < orange) {
            maxCounter = orange;
            maxEggs = "orange";
        } else if (maxCounter < blue) {
            maxCounter = blue;
            maxEggs = "blue";
        } else if (maxCounter < green) {
            maxCounter = green;
            maxEggs = "green";
        }
    }

    console.log(`Red eggs: ${red}`);
    console.log(`Orange eggs: ${orange}`);
    console.log(`Blue eggs: ${blue}`);
    console.log(`Green eggs: ${green}`);
    console.log(`Max eggs: ${maxCounter} -> ${maxEggs}`);
    
}
easterEggs(["7",
    "orange",
    "blue",
    "green",
    "green",
    "blue",
    "red",
    "green"]);
