function passwordValidator(pass) {

    let isOnlyLettersAndDigigts = /^[A-Za-z0-9]*$/.test(pass);

    let digits = /^[A-Za-z]*[0-9]{2,}/.test(pass);
    let isValidLength = pass.length >= 6 && pass.length <= 10;

    if (isOnlyLettersAndDigigts && digits && isValidLength) {
        console.log('Password is valid');
    } else {

        if (!isOnlyLettersAndDigigts) {
            console.log("Password must consist only of letters and digits");
        }

        if (!digits) {
            console.log("Password must have at least 2 digits");
        }

        if (!isValidLength) {
            console.log("Password must be between 6 and 10 characters");
        }
    }
}
passwordValidator('MyPass123');
console.log('------------');
passwordValidator('logIn');
console.log('------------');
passwordValidator('Pa$s$s');