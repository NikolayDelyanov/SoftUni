function passwordValidator(pass) {

    let digits = 0;
    let isValidLength = true;

    if (pass.length < 6 || pass.length > 10) {
        console.log("Password must be between 6 and 10 characters");
        isValidLength = false;
    }

    let isOnlyLettersAndDigigts = /^[A-Za-z0-9]*$/.test(pass);

    for (let i = 0; i < pass.length; i++) {
        console.log();
        if (/\d/.test(pass[i])) {
            digits++
        }
    }

    if (/^[A-Za-z]*[0-9]{2,}/.test(pass)) {
        console.log('Password is valid');
    } else {

        if (isOnlyLettersAndDigigts === false) {
            console.log("Password must consist only of letters and digits");
        }

        if (digits < 2) {
            console.log("Password must have at least 2 digits");
        }
    }
}
passwordValidator('MyPass123');
console.log('------------');
passwordValidator('logIn');
console.log('------------');
passwordValidator('Pa$s$s');