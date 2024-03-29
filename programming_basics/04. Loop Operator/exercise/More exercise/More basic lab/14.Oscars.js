function oscars(input) {

    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let numberOfAssessors = Number(input[2]);

    for (let index = 3; index < input.length; index += 2) {
        let assessorName = input[index];
        let assessorPoints = input[index + 1];

        let totalPoints = (assessorName.length * assessorPoints) / 2;

        academyPoints += totalPoints;

        if (academyPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            break;
        }
    }

    if (academyPoints < 1250.5) {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - academyPoints).toFixed(1)} more!`);
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