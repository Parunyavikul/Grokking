/* eslint-disable no-unused-vars */
/* Given an array of positive numbers and a positive number S
Find the length of the smallest contiguous subarray whose sum is greater than or equal to S
**/

function smallest_subarray_with_given_sum(arr, s){
  let minLength = Infinity,
      start = 0,
      sum = 0;
  if(arr[0] >= s){
    return 1;
  }

  for(let end = 0; end < arr.length; end++){
    sum += arr[end];
    while(sum >= s){
      minLength = Math.min(minLength, end - start + 1);
      sum -= arr[start];
      start++;
    }
  }

  if(minLength === Infinity){
    return 0;
  }
  return minLength;

}
