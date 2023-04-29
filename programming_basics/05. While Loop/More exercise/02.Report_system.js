function reportSystem(input) {

    let sum = Number(input[0]);
    let cashPayment = 0;
    let cardPayment = 0;
    let index = 1;
    let command = input[index];
    let totalSum = 0;
    let totalCash = 0;
    let totalCard = 0;

    while (command !== 'End') {

        let transaction = Number(command);

        if (index % 2 === 0) {
            transaction += cardPayment;

            if (transaction < 10) {
                console.log("Error in transaction!");
            }

            if (transaction > 10) {
                console.log("Product sold!");
                totalSum += transaction;
                totalCard += Number(input[index]);
            }

        } else {
            transaction += cashPayment;

            if (transaction > 100) {
                console.log("Error in transaction!");
            }

            if (transaction < 100) {
                console.log("Product sold!");
                totalSum += transaction;
                totalCash += Number(input[index]);
            }
        }

        if (totalSum >= sum) {
            break;
        }

        index++;
        command = input[index];
    }

    if (totalSum >= sum) {
        console.log(`Average CS: ${(totalCash / 2).toFixed(2)}`);
        console.log(`Average CC: ${(totalCard / 2).toFixed(2)}`);
    } else if (command === 'End') {
        console.log("Failed to collect required money for charity.");
    }


}
reportSystem(["500", "120", "8", "63", "256", "78", "317"]);