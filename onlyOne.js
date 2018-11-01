//given an array (a) and a value (x). 
//checks whether the provided array contains the value.
const onlyOne = (array, num) => {
    return array.includes(num);
}

console.log(onlyOne(['cat',2,3], 'cat'));

