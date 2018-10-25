//Returns the length of the shortest word in a string.
const shortestWordLength = (string) => {

    let splitString = string.split(" ");
    return splitString.reduce((wordOne, wordTwo) => 
        wordOne.length <= wordTwo.length ? wordOne : wordTwo).length; 
};
