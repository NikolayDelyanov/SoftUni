function clesius(input) {

    let degreesC = Number(input[0]);

    let degreesF = degreesC * 1.8 + 32;

    console.log(degreesF.toFixed(2));


}
clesius(["25"]);