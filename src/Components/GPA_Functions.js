import React from 'react';

function calcCredit1(m) {
    if (m <=7){
        return 0;
    }else if (m == 8){
        return 1;
    }else if (m == 9){
        return 1.5;
    }else if (m == 10){
        return 2;
    }else if (m == 11){
        return 2.33;
    }else if (m == 12){
        return 2.67;
    }else if (m == 13){
        return 3;
    }else if (m == 14){
        return 3.33;
    }else if (m == 15){
        return 3.67;
    }else if (m >= 16 && m <= 20){
        return 4;
    }
}

function calcCredit2(m) {
    if (m <=15){
        return 0;
    }else if (m == 16){
        return 2;
    }else if (m == 17){
        return 2.5;
    }else if (m == 18){
        return 3;
    }else if (m == 19){
        return 3.5;
    }else if (m == 20){
        return 4;
    }else if (m == 21){
        return 4.33;
    }else if (m == 22){
        return 4.67;
    }else if (m == 23){
        return 5;
    }else if (m == 24){
        return 5.33;
    }else if (m == 25){
        return 5.67;
    }else if (m == 26){
        return 6;
    }else if (m == 27){
        return 6.33;
    }else if (m == 28){
        return 6.67;
    }else if (m == 29){
        return 7;
    }else if (m == 30){
        return 7.33;
    }else if (m == 31){
        return 7.67;
    }else if (m >= 32 && m <=40){
        return 8;
    }
}

function calcCredit3(m) {
    if (m <=23){
        return 0;
    }else if (m == 24){
        return 3;
    }else if (m == 25){
        return 3.5;
    }else if (m == 26){
        return 4;
    }else if (m == 27){
        return 4.5;
    }else if (m == 28){
        return 5;
    }else if (m == 29){
        return 5.5;
    }else if (m == 30){
        return 6;
    }else if (m == 31){
        return 6.33;
    }else if (m == 32){
        return 6.67;
    }else if (m == 33){
        return 7;
    }else if (m == 34){
        return 7.33;
    }else if (m == 35){
        return 7.67;
    }else if (m == 36){
        return 8;
    }else if (m == 37){
        return 8.33;
    }else if (m == 38){
        return 8.67;
    }else if (m == 39){
        return 9;
    }else if (m == 40){
        return 9.33;
    }else if (m == 41){
        return 9.67;
    }else if (m == 42){
        return 10;
    }else if (m == 43){
        return 10.33;
    }else if (m == 44){
        return 10.67;
    }else if (m == 45){
        return 11;
    }else if (m == 46){
        return 11.33;
    }else if (m == 47){
        return 11.67;
    }else if (m >= 48 && m <=60){
        return 12;
    }
}

function calcCredit4(m) {
    if (m <= 31){
        return 0;
    }else if (m == 32){
        return 4;
    }else if (m == 33){
        return 4.5;
    }else if (m == 34){
        return 5;
    }else if (m == 35){
        return 5.5;
    }else if (m == 36){
        return 6;
    }else if (m == 37){
        return 6.5;
    }else if (m == 38){
        return 7;
    }else if (m == 39){
        return 7.5;
    }else if (m == 40){
        return 8;
    }else if (m == 41){
        return 8.33;
    }else if (m == 42){
        return 8.67;
    }else if (m == 43){
        return 9;
    }else if (m == 44){
        return 9.33;
    }else if (m == 45){
        return 9.67;
    }else if (m == 46){
        return 10;
    }else if (m == 47){
        return 10.33;
    }else if (m == 48){
        return 10.67;
    }else if (m == 49){
        return 11;
    }else if (m == 50){
        return 11.33;
    }else if (m == 51){
        return 11.67;
    }else if (m == 52){
        return 12;
    }else if (m == 53){
        return 12.33;
    }else if (m == 54){
        return 12.67;
    }else if (m == 55){
        return 13;
    }else if (m == 56){
        return 13.33;
    }else if (m == 57){
        return 13.67;
    }else if (m == 58){
        return 14;
    }else if (m == 59){
        return 14.33;
    }else if (m == 60){
        return 14.67;
    }else if (m == 61){
        return 15;
    }else if (m == 62){
        return 15.33;
    }else if (m == 63){
        return 15.67;
    }else if (m >= 64 && m <=80){
        return 16;
    }
}

function calcCredit5(m) {
    if (m <= 39){
        return 0;
    }else if (m == 40){
        return 5;
    }else if (m == 41){
        return 5.5;
    }else if (m == 42){
        return 6;
    }else if (m == 43){
        return 6.5;
    }else if (m == 44){
        return 7;
    }else if (m == 45){
        return 7.5;
    }else if (m == 46){
        return 8;
    }else if (m == 47){
        return 8.5;
    }else if (m == 48){
        return 9;
    }else if (m == 49){
        return 9.5;
    }else if (m == 50){
        return 10;
    }else if (m == 51){
        return 10.33;
    }else if (m == 52){
        return 10.67;
    }else if (m == 53){
        return 11;
    }else if (m == 54){
        return 11.33;
    }else if (m == 55){
        return 11.67;
    }else if (m == 56){
        return 12;
    }else if (m == 57){
        return 12.33;
    }else if (m == 58){
        return 12.67;
    }else if (m == 59){
        return 13;
    }else if (m == 60){
        return 13.33;
    }else if (m == 61){
        return 13.67;
    }else if (m == 62){
        return 14;
    }else if (m == 63){
        return 14.33;
    }else if (m == 64){
        return 14.67;
    }else if (m == 65){
        return 15;
    }else if (m == 66){
        return 15.33;
    }else if (m == 67){
        return 15.67;
    }else if (m == 68){
        return 16;
    }else if (m == 69){
        return 16.33;
    }else if (m == 70){
        return 16.67;
    }else if (m == 71){
        return 17;
    }else if (m == 72){
        return 17.33;
    }else if (m == 73){
        return 17.67;
    }else if (m == 74){
        return 18;
    }else if (m == 75){
        return 18.33;
    }else if (m == 76){
        return 18.67;
    }else if (m == 77){
        return 19;
    }else if (m == 78){
        return 19.33;
    }else if (m == 79){
        return 19.67;
    }else if (m >= 80 && m <=100){
        return 20;
    }
}

export {calcCredit1, calcCredit2, calcCredit3, calcCredit4, calcCredit5}