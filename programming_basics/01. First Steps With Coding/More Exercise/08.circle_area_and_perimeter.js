function areaAndPerimeter(input) {

    let radius = Number(input[0]);

    let calculatedArea = Math.PI * radius * radius;
    let calculatedPerimeter = 2 * Math.PI * radius;

    console.log(calculatedArea.toFixed(2));
    console.log(calculatedPerimeter.toFixed(2));


}
areaAndPerimeter(["3"]);