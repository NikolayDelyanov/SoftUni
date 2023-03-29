function demo(input){

    let season = input[0];
    let groupType = input[1];
    let studentsNum = Number(input[2]);
    let nightsNum = Number(input[3]);
    
    let nightPrice = 0;
    let totalPrice = 0;
    
    let sport = 0;

    if(groupType == "boys"){
        switch(season){
            case 'Winter':
                nightPrice = studentsNum * 9.60 * nightsNum;
                sport = 'Judo';
                if(studentsNum >= 50){
                    totalPrice = nightPrice * (50 / 100);
                }else if(studentsNum >= 20 && studentsNum < 50){
                    totalPrice = nightPrice * (15 / 100);
                }else if(studentsNum >= 10 && studentsNum < 20){
                    totalPrice = nightPrice * (5 / 100);
                }
                console.log(`${sport} ${totalPrice.toFixed(2)} lv.`);
                break;
            case 'Spring':
                nightPrice = studentsNum * 7.20 * nightsNum;
                sport = 'Tennis';
                if(studentsNum >= 50){
                    totalPrice = nightPrice * (50 / 100);
                }else if(studentsNum >= 20 && studentsNum < 50){
                    totalPrice = nightPrice * (15 / 100);
                }else if(studentsNum >= 10 && studentsNum < 20){
                    totalPrice = nightPrice * (5 / 100);
                }
                console.log(`${sport} ${totalPrice.toFixed(2)} lv.`);
                break;
            case 'Summer':
                nightPrice = studentsNum * 15 * nightsNum;
                sport = 'Football';
                if(studentsNum >= 50){
                    totalPrice = nightPrice * (50 / 100);
                }else if(studentsNum >= 20 && studentsNum < 50){
                    totalPrice = nightPrice * (15 / 100);
                }else if(studentsNum >= 10 && studentsNum < 20){
                    totalPrice = nightPrice * (5 / 100);
                }
                console.log(`${sport} ${totalPrice.toFixed(2)} lv.`);
                break;
        }
    } else if(groupType == "girls"){
        switch(season){
            case 'Winter':
                nightPrice = studentsNum * 9.60 * nightsNum;
                sport = 'Gymnastics';
                if(studentsNum >= 50){
                    totalPrice = nightPrice * (50 / 100);
                }else if(studentsNum >= 20 && studentsNum < 50){
                    totalPrice = nightPrice * (15 / 100);
                }else if(studentsNum >= 10 && studentsNum < 20){
                    totalPrice = nightPrice * (5 / 100);
                }
                console.log(`${sport} ${totalPrice.toFixed(2)} lv.`);
                break;
            case 'Spring':
                nightPrice = studentsNum * 7.20 * nightsNum;
                sport = 'Athletics';
                if(studentsNum >= 50){
                    totalPrice = nightPrice * (50 / 100);
                }else if(studentsNum >= 20 && studentsNum < 50){
                    totalPrice = nightPrice * (15 / 100);
                }else if(studentsNum >= 10 && studentsNum < 20){
                    totalPrice = nightPrice * (5 / 100);
                }
                console.log(`${sport} ${totalPrice.toFixed(2)} lv.`);
                break;
            case 'Summer':
                nightPrice = studentsNum * 15 * nightsNum;
                sport = 'Volleyball';
                if(studentsNum >= 50){
                    totalPrice = nightPrice * (50 / 100);
                }else if(studentsNum >= 20 && studentsNum < 50){
                    totalPrice = nightPrice * (15 / 100);
                }else if(studentsNum >= 10 && studentsNum < 20){
                    totalPrice = nightPrice * (5 / 100);
                }
                console.log(`${sport} ${totalPrice.toFixed(2)} lv.`);
                break;
        }
    } else if(groupType == "mixed"){
        switch(season){
            case 'Winter':
                nightPrice = studentsNum * 10 * nightsNum;
                sport = 'Ski';
                if(studentsNum >= 50){
                    totalPrice = nightPrice * (50 / 100);
                }else if(studentsNum >= 20 && studentsNum < 50){
                    totalPrice = nightPrice * (15 / 100);
                }else if(studentsNum >= 10 && studentsNum < 20){
                    totalPrice = nightPrice * (5 / 100);
                }
                console.log(`${sport} ${totalPrice.toFixed(2)} lv.`);
                break;
            case 'Spring':
                nightPrice = studentsNum * 9.50 * nightsNum;
                sport = 'Cycling';
                if(studentsNum >= 50){
                    totalPrice = nightPrice * (50 / 100);
                }else if(studentsNum >= 20 && studentsNum < 50){
                    totalPrice = nightPrice * (15 / 100);
                }else if(studentsNum >= 10 && studentsNum < 20){
                    totalPrice = nightPrice * (5 / 100);
                }
                console.log(`${sport} ${totalPrice.toFixed(2)} lv.`);
                break;
            case 'Summer':
                nightPrice = studentsNum * 20 * nightsNum;
                sport = 'Swimming';
                if(studentsNum >= 50){
                    totalPrice = nightPrice * (50 / 100);
                }else if(studentsNum >= 20 && studentsNum < 50){
                    totalPrice = nightPrice * (15 / 100);
                }else if(studentsNum >= 10 && studentsNum < 20){
                    totalPrice = nightPrice * (5 / 100);
                }
                console.log(`${sport} ${totalPrice.toFixed(2)} lv.`);
                break;
        }
    }

}
demo (["Spring","girls","20","7"]);