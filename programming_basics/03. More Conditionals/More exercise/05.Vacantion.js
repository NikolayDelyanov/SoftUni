function vacantion(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let location = 0;
    let place = 0;
    let price = 0;

    if (budget <= 1000) {
        place = "Camp";
        switch (season) {
            case 'Summer':
                location = "Alaska";
                price = budget * (65 / 100);
                break;
            case 'Winter':
                location = "Morocco";
                price = budget * (45 / 100);
                break;
        }
        console.log(`${location} - ${place} - ${price.toFixed(2)}`);

    } else if (budget <= 3000) {
        place = "Hut";
        switch (season) {
            case 'Summer':
                location = "Alaska";
                price = budget * (80 / 100);
                break;
            case 'Winter':
                location = "Morocco";
                price = budget * (60 / 100);
                break;
        }
        console.log(`${location} - ${place} - ${price.toFixed(2)}`);

    } else if (budget > 3000) {
        place = "Hotel";
        switch (season) {
            case 'Summer':
                location = "Alaska";
                price = budget * (90 / 100);
                break;
            case 'Winter':
                location = "Morocco";
                price = budget * (90 / 100);
                break;
        }
        console.log(`${location} - ${place} - ${price.toFixed(2)}`);

    }

}
vacantion(["800", "Summer"]);