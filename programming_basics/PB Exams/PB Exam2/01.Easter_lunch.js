//Start exam 22:25

function easterLunch(input) {

    let numEasterBread = Number(input[0]);
    let numEggShells = Number(input[1]);
    let kilosOfCookies = Number(input[2]);

    let oneShell = 12;

    let priceForBread = numEasterBread * 3.20;
    let priceForEggs = numEggShells * 4.35;
    let priceForCookies = kilosOfCookies * 5.40;
    let priceForPaint = numEggShells * oneShell * 0.15;

    let totalPrice = priceForBread + priceForEggs + priceForCookies + priceForPaint;

    console.log(totalPrice.toFixed(2));

}
easterLunch(["3",
    "2",
    "3"]);
