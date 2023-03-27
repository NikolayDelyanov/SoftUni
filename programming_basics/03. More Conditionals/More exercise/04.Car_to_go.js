function carToGo(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let carType = 0;
    let price = 0;

    if (budget <= 100) {
        console.log("Economy class");
        switch (season) {
            case 'Summer':
                carType = "Cabrio";
                price = budget * (35 / 100);
                console.log(`${carType} - ${price.toFixed(2)}`);
                break;
            case 'Winter':
                carType = "Jeep";
                price = budget * (65 / 100);
                console.log(`${carType} - ${price.toFixed(2)}`);
                break;
        }
    } else if (budget <= 500) {
        console.log("Compact class");
        switch (season) {
            case 'Summer':
                carType = "Cabrio";
                price = budget * (45 / 100);
                console.log(`${carType} - ${price.toFixed(2)}`);
                break;
            case 'Winter':
                carType = "Jeep";
                price = budget * (80 / 100);
                console.log(`${carType} - ${price.toFixed(2)}`);
                break;
        }
    } else if (budget > 500) {
        console.log("Luxury class");
        switch (season) {
            case 'Summer':
            case 'Winter':
                carType = "Jeep";
                price = budget * (90 / 100);
                console.log(`${carType} - ${price.toFixed(2)}`);
                break;
        }
    }

}
carToGo(["450", "Summer"]);