function multiplicationTable(input) {

    let num = Number(input[0]);

    let totalWork = 0;

    for (let i = 1; i <= 10; i++) {
        totalWork = (i * num);
        console.log(`${i} * ${num} = ${totalWork}`);
    }

}
multiplicationTable(["5"]);