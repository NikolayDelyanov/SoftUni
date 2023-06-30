  function oddAndEvenSum(number){
    
    let evenSum = 0;
    let oddSum = 0;

    let digits = number.toString();

    for (let i = 0; i < digits.length; i++) {
        let digit = parseInt(digits[i]);

        if (digit % 2 === 0) {
          evenSum += digit;
        } else {
          oddSum += digit;
        }
      }

      console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

  }
  oddAndEvenSum(3495892137259234);