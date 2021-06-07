/* eslint-disable no-unused-vars */
/***
 * Given an array of positive numbers and a positive number K.
 * Find the maximum sum of any contiguous subarray of size k
 * */

/**
 * Ex:
 * Input: [2,3,5,6,1] k = 2
 * Output: 11
 *
 * */

const max_sub_array_of_size_k =function (arr,k){
  let maxSum = 0,
      sum = 0,
      start = 0;

  for(let end = 0; end < arr.length; end++){
    sum += arr[end];
    if(end >= k - 1){
      maxSum = Math.max(maxSum, sum);
      sum -= arr[start];
      start++;
    }
  }
  return maxSum;
}
