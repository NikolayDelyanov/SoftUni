function factorialDivision(firstNum,secondNum){

    let firstFactorialNumber = calcFactorial(firstNum);
    let secondFactorialNumber = calcFactorial(secondNum);

    console.log((firstFactorialNumber/secondFactorialNumber).toFixed(2));

    function calcFactorial(num){

        let result = 1;
        for(let i = num; i > 1; i-=2){
            result *= i * (i - 1);
        }

        return result;
    }
}
factorialDivision(5,2);
