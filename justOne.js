//Create a method one? (JS one) that accepts two params, a list and a block (JS: a function), 
//and returns true only if the block (/function) returns true for exactly one item in the array

function justOne(array, block){
    let counter = 0;
       for(item in array){
          if(array[item] == block){
            counter++
          } 
      }
      if(counter == 1){
        return true;
      }
      return false;
  }

  console.log(justOne([1,2,3], 1))