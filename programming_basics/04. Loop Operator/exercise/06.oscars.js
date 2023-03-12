function oscars(input) {

    let name = input[0];
    let academyPoints = Number(input[1]);
    let n = Number(input[2]);

    for (let i = 3; i < input.length; i += 2) {
        let assessorName = input[i];
        let points = input[i + 1];

        let totalPoints = (assessorName.length * points) / 2;

        academyPoints += totalPoints;

        if (academyPoints > 1250.5) {
            console.log(`Congratulations, ${name} got a nominee for leading role with ${academyPoints}!`);
            break;
        }
    }

    if (academyPoints < 1250.5) {
        console.log(`Sorry, ${name} you need ${(1250.5 - academyPoints).toFixed(2)} more!`);

    }


}
oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"]);