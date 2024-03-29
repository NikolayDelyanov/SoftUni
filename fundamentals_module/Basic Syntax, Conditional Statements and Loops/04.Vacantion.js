function vacantion(count, type, day) {

    let totalPrice = 0;

    switch (day) {
        case 'Friday':
            switch (type) {
                case 'Students':
                    totalPrice = count * 8.45;
                    if (count >= 30) {
                        totalPrice *= 0.85;
                    }
                    break;
                case 'Bussines':
                    totalPrice = count * 10.90;
                    if (count >= 100) {
                        totalPrice -= 10 * 10.90;
                    }
                    break;
                case 'Regular':
                    totalPrice = count * 15;
                    if (count >= 10 && count <= 20) {
                        totalPrice *= 0.95;
                    }
                    break;
            }
            break;
        case 'Saturday':
            switch (type) {
                case 'Students':
                    totalPrice = count * 9.80;
                    if (count >= 30) {
                        totalPrice *= 0.85;
                    }
                    break;
                case 'Bussines':
                    totalPrice = count * 15.60;
                    if (count >= 100) {
                        totalPrice -= 10 * 15.60;
                    }
                    break;
                case 'Regular':
                    totalPrice = count * 20;
                    if (count >= 10 && count <= 20) {
                        totalPrice *= 0.95;
                    }
                    break;
            }
            break;
        case 'Sunday':
            switch (type) {
                case 'Students':
                    totalPrice = count * 10.46;
                    if (count >= 30) {
                        totalPrice *= 0.85;
                    }
                    break;
                case 'Bussines':
                    totalPrice = count * 16;
                    if (count >= 100) {
                        totalPrice -= 10 * 16;
                    }
                    break;
                case 'Regular':
                    totalPrice = count * 22.50;
                    if (count >= 10 && count <= 20) {
                        totalPrice *= 0.95;
                    }
                    break;
            }
            break;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
vacantion(30, "Students", "Sunday");
vacantion(40, "Regular", "Saturday");