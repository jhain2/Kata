//provides the digital root of a number

const digitalRoot = (number) => {
    digits = number.toString().split("");
    realDigits = digits.map(Number);
    let sum = 0;
for(let i = 0; i < realDigits.length; i++){
     sum += realDigits[i];
}
    if(sum <= 9){
      console.log(sum);
        return sum;
    }
    else{ return digitalRoot(sum)}
}
