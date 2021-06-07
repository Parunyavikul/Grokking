/* eslint-disable no-unused-vars */
/**
 * Given ONLY two baskets, an array of characters where each character represents a fruit tree, and your goal is to put maximum number of fruits in each basket.
 * The only restriction is that each basket can have only ONE fruit type.
 *
 * You can start with any tree, but you can't skip a tree once you have started. Youw ill pick one fruit from each tree uuntil you cannot.
 *
 * Write a function to return the maximum number of fruits in both baskets.
 */

function fruitbasket(arr){
    let maxLength = 0,
        fruitMap ={},
        start =0;

  for(let end = 0; end < arr.length; end++){
    const rightLetter = arr[end];
    if(!(rightLetter in fruitMap)){
      fruitMap[rightLetter] = 0;
    }
    fruitMap[rightLetter] += 1;
    while(Object.keys(fruitMap).length > 2){
      let leftLetter = arr[start];
      fruitMap[leftLetter] -= 1;
      if(fruitMap[leftLetter]===0){
        delete fruitMap[leftLetter];
      }
      start++;
    }
    maxLength = Math.max(maxLength, end-start+1);
  }
  return maxLength;

}
