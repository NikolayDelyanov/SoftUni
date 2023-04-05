function trekkingMania(input){

let numOfGroups = Number(input[0]);

let totalNumOfPeople = 0;

let musalaPeople = 0;
let monblanPeople = 0;
let kilimandjaroPeople = 0;
let k2People = 0;
let everestPeople = 0;

for (let index = 1; index < input.length; index++) {
    let numOfPeople = Number(input[index]);
    totalNumOfPeople += numOfPeople;
    
    /*
     · Група до 5 човека – изкачват Мусала
· Група от 6 до 12 човека – изкачват Монблан
· Група от 13 до 25 човека – изкачват Килиманджаро
· Група от 26 до 40 човека – изкачват К2
· Група от 41 или повече човека – изкачват Еверест

Да се напише програма, която изчислява процента на катерачите изкачващи всеки връх.
    */

    if(numOfPeople < 6){
        musalaPeople += numOfPeople;
    }else if(numOfPeople <= 12){
        monblanPeople += numOfPeople;
    }else if(numOfPeople <= 25){
        kilimandjaroPeople += numOfPeople;
    }else if(numOfPeople <= 40){
        k2People += numOfPeople;
    }else if(numOfPeople >= 41){
        everestPeople += numOfPeople;
    }   
}

 musalaPeople = (musalaPeople / totalNumOfPeople) * 100;
 monblanPeople = (monblanPeople / totalNumOfPeople) * 100;
 kilimandjaroPeople = (kilimandjaroPeople / totalNumOfPeople) * 100;
 k2People = (k2People / totalNumOfPeople) * 100;
 everestPeople = (everestPeople / totalNumOfPeople) * 100;


 console.log(`${musalaPeople.toFixed(2)}%`);
 console.log(`${monblanPeople.toFixed(2)}%`);
 console.log(`${kilimandjaroPeople.toFixed(2)}%`);
 console.log(`${k2People.toFixed(2)}%`);
 console.log(`${everestPeople.toFixed(2)}%`);

}

trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26", "17", "37", "40", "78"]);