function housePainting(input) {

    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let window = 1.5;

    let sideWall = x * y;
    let windowArea = window * window;
    let totalStrange = (2 * sideWall) - (2 * windowArea);

    let backWall = x * x;
    let enter = 1.2 * 2;
    let totalFrontAndBack = (2 * backWall) - enter;

    let totalAreaForWall = totalStrange + totalFrontAndBack;

    let greenPaint = totalAreaForWall / 3.4;

    let roofRectangles = 2 * (x * y);
    let triangles = 2 * (x * h / 2);
    let totalAreaForRoof = roofRectangles + triangles;

    let redPaint = totalAreaForRoof / 4.3;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));

}
housePainting(["6", "10", "5.2"]);