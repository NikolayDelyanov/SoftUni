function pipesInPool(input) {

    let v = Number(input[0]);
    let pipe1 = Number(input[1]);
    let pipe2 = Number(input[2]);
    let hours = Number(input[3]);

    let pipe1Volume = pipe1 * hours;
    let pipe2Volume = pipe2 * hours;

    let totalVolume = (pipe1 + pipe2) * hours;
    let remainingVolume = v - totalVolume;

    let procentPipe1 = (pipe1Volume / totalVolume) * 100;
    let procentPipe2 = (pipe2Volume / totalVolume) * 100;
    totalVolume = (totalVolume / v) * 100;

    if (totalVolume > v) {
        v = (v - remainingVolume) / hours;
        console.log(`For ${hours.toFixed(2)} hours the pool overflows with ${Math.abs(remainingVolume).toFixed(2)} liters.`);
    } else {
        console.log(`The pool is ${totalVolume.toFixed(2)}% full. Pipe 1: ${procentPipe1.toFixed(2)}%. Pipe 2: ${procentPipe2.toFixed(2)}%.`);
    }

}
pipesInPool(["1000",
    "100",
    "120",
    "3"]);