function hotelRoom(input) {

    let months = input[0];
    let numOfNights = Number(input[1]);

    let studioPrice = 0;
    let apartmentPrice = 0;

    switch (months) {
        case 'May':
        case 'October':
            studioPrice = 50;
            apartmentPrice = 65;
            if (numOfNights > 14) {
                studioPrice = studioPrice - studioPrice * (30 / 100);
            } else if (numOfNights > 7) {
                studioPrice = studioPrice - studioPrice * (5 / 100);
            }
            break;
        case 'June':
        case 'September':
            studioPrice = 75.20;
            apartmentPrice = 68.70;
            if (numOfNights > 14) {
                studioPrice = studioPrice - studioPrice * (20 / 100);
            }
            break;
        case 'July':
        case 'August':
            studioPrice = 76;
            apartmentPrice = 77;
            break;
    }
    if (numOfNights > 14) {
        apartmentPrice = apartmentPrice - apartmentPrice * (10 / 100);
    }


    let totalStudioPrice = numOfNights * studioPrice;
    let totalApartmentPrice = numOfNights * apartmentPrice;

    console.log(`Apartment: ${totalApartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${totalStudioPrice.toFixed(2)} lv.`);

}
hotelRoom(["May", "15"]);