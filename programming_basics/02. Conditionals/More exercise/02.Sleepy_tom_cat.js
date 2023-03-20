function sleepyTomCat(input){

let numberOfdaysOff = Number(input[0]);

let playTimeInYear = 30000;
let oneYear = 365;

let holidayDayPlay = numberOfdaysOff * 127;
let workDay = oneYear - numberOfdaysOff;
let workDayPlay = workDay * 63;

let totalTimePlay = workDayPlay + holidayDayPlay;
let difference = totalTimePlay - playTimeInYear;

let hours = 0;
let minutes = 0;

if(playTimeInYear < totalTimePlay){
     hours = (Math.floor(difference / 60).toFixed(0));
     minutes = Math.floor(difference - (60 * hours)); 
    console.log("Tom will run away");
    console.log(`${Math.abs(hours)} hours and ${Math.abs(minutes)} minutes more for play`);
}else if(playTimeInYear > totalTimePlay){
     hours = ((difference / 60).toFixed(0));
     minutes = (difference - (60 * hours));
    console.log("Tom sleeps well");
    console.log(`${Math.abs(hours)} hours and ${Math.abs(minutes)} minutes less for play`);
}

}
sleepyTomCat(["75"]);