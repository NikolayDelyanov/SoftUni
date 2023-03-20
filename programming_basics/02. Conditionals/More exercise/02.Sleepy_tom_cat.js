function sleepyTomCat(input){

let numberOfdaysOff = Number(input[0]);

let playTimeInYear = 30000;
let oneYear = 365;

let holidayDayPlay = numberOfdaysOff * 127;
let workDay = oneYear - numberOfdaysOff;
let workDayPlay = workDay * 63;

let totalTimePlay = workDayPlay + holidayDayPlay;
let difference = playTimeInYear - totalTimePlay;

let hours = (difference / 60).toFixed(0);

if(playTimeInYear < totalTimePlay){
    console.log("Tom will run away");
    console.log(`${hours} hours and ${difference} minuets more for play`);
}else if(playTimeInYear > totalTimePlay){
    console.log("Tom sleeps well");
    console.log(`${hours} hours and ${difference} minuets less for play`);
}

}
sleepyTomCat(["20"]);