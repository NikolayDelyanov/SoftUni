function dungeonestDark(input){

let rooms = input[0].split("|");
let health = 100;
let coins = 0;
let sucsess = true;
let roomCount = 0;

for (let i = 0; i < rooms.length; i++) {
    
    let currentRoom = rooms[i].split(' ');
    let roomType = currentRoom[0];
    let value = Number(currentRoom[1]);
    
    if(roomType === "potion"){
        if(health < 100){
            let incomeHeal = value - (value + health -100);
            health += incomeHeal;
            console.log(`You healed for ${incomeHeal} hp.`);
            console.log(`Current health: ${health} hp.`);
        }
        roomCount++;
    } else if(roomType === "chest"){
        coins += value;
        console.log(`You found ${value} coins.`);
        roomCount++;
    } else {
        health -= value;
        if(health > 0){
            console.log(`You slayed ${roomType}.`);
            roomCount++;
        } else {
            console.log(`You died! Killed by ${roomType}.`);
            console.log(`Best room: ${++roomCount}`);
            sucsess=false;
            break;
        }
    }
}


if (sucsess) {
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}

}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);