/*Write a function that accepts fight string consists of only small 
letters and return who wins the fight. When the left side wins return Left side wins!, 
when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3 
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3 
 d - 2
 z - 1*/

 const alphabetWar = (stringy) => {
     const leftSide = {
         w: 4,
         p: 3,
         b: 2,
         s: 1
     }

     const rightSide = {
         m: 4,
         q: 3,
         d: 2,
         z: 1
     }
     let leftPower = 0;
     let rightPower = 0;

stringy.split("").forEach((letter) => {
    if(!isNaN(leftSide[letter])){
    leftPower += +leftSide[letter];
    }
    if(!isNaN(rightSide[letter])){
    rightPower += +rightSide[letter];
    console.log(rightPower);
    }
})
    if(rightPower == leftPower){
        return 'Let\'s fight again!'
    }
    else if(rightPower > leftPower){
        return "Right side wins!"
    }
    else {return "Left side wins!"}
 }
 
 console.log(alphabetWar(''));