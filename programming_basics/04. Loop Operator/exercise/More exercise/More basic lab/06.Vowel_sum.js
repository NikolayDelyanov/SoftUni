function vowelSum(input) {

    let word = input[0];

    let totalValue = 0;

    for (let index = 0; index < word.length; index++) {
        let currentCharacter = word.charAt(index);

        switch (currentCharacter) {
            case 'a':
                totalValue += 1;
                break;
            case 'e':
                totalValue += 2;
                break;
            case 'i':
                totalValue += 3;
                break;
            case 'o':
                totalValue += 4;
                break;
            case 'u':
                totalValue += 5;
                break;
            default:
                console.log(" ");
                break;
        }
    }
    console.log(totalValue);

}
vowelSum(["hello"]);