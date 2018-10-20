//Given an array of numbers, return an array,
// with each member of input array rounded to a nearest number, divisible by 5.

function roundToFive(numberArray){
    return numberArray.map(individualNumber => 5 * Math.round(individualNumber/5));
}

//Sample Test
/*describe('roundToFive', function(){
    it('should round a number up or down to closes number divisible by 5', function(){
       Test.expect(roundToFive([34.5, 56.2, 11, 13], [35, 55, 10, 15]));
    });  
});
*/