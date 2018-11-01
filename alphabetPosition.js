/*given a string, replaces every letter with its position in the alphabet.


"a" = 1, "b" = 2, etc.

Example
alphabet_position("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)*/

const alphabetPosition = (string) => {
    let positionArray = [];
    let alphabetArray = string.toLowerCase().split("").map((letter) => {

    switch(letter){
        case 'a':
        letter = '1';
        positionArray.push(letter);
        break;
        case 'b':
        letter = '2'
        positionArray.push(letter);
        break;
        case 'c':
        letter = '3'
        positionArray.push(letter);
        break;
        case 'd':
        letter = '4'
        positionArray.push(letter);
        break;
        case 'e':
        letter = '5'
        positionArray.push(letter);
        break;case 'f':
        letter = '6'
        positionArray.push(letter);
        break;case 'g':
        letter = '7'
        positionArray.push(letter);
        break;case 'h':
        letter = '8'
        positionArray.push(letter);
        break;case 'i':
        letter = '9'
        positionArray.push(letter);
        break;case 'j':
        letter = '10'
        positionArray.push(letter);
        break;case 'k':
        letter = '11'
        positionArray.push(letter);
        break;case 'l':
        letter = '12'
        positionArray.push(letter);
        break;case 'm':
        letter = '13'
        positionArray.push(letter);
        break;case 'n':
        letter = '14'
        positionArray.push(letter);
        break;case 'o':
        letter = '15'
        positionArray.push(letter);
        break;case 'p':
        letter = '16'
        positionArray.push(letter);
        break;case 'q':
        letter = '17'
        positionArray.push(letter);
        break;case 'r':
        letter = '18'
        positionArray.push(letter);
        break;case 's':
        letter = '19'
        positionArray.push(letter);
        break;case 't':
        letter = '20'
        positionArray.push(letter);
        break;case 'u':
        letter = '21'
        positionArray.push(letter);
        break;case 'v':
        letter = '22'
        positionArray.push(letter);
        break;case 'w':
        letter = '23'
        positionArray.push(letter);
        break;case 'x':
        letter = '24'
        positionArray.push(letter);
        break;case 'y':
        letter = '25'
        positionArray.push(letter);
        break;case 'z':
        letter = '26'
        positionArray.push(letter);
        break;
    }
    });
    return positionArray.join(" ").toString();
}

console.log(alphabetPosition('Asbcda'));