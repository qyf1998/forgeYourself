/*
Can the numbers in the list sum up to get the number N?

Example:
canSum(7, [5, 3, 4, 7]) -> true
canSum(7, [2, 4]) -> false

*/


const canSum = (n, l = []) => {
  if (n === 0) return true;
  if (n < 0) return false;
  for (let x of l){
    const reminder = n - x;
    if(canSum(reminder, l)) {
      return true;
    };
  }
  return false;
 };


// console.log(canSum(7, [5, 3, 4, 7]));
//console.log(cansum());
//console.log(cansum());
//console.log(cansum());


const newCanSum = (n, l, memo = {}) => {
  if (n in memo) return memo[n];
  if (n === 0) return true;
  if (n < 0) return false;

  for (let x of l){
    const reminder = n - x;
    if(newCanSum(reminder, l, memo) === true) {
      memo[n] = true;
      return true;
    };
  }

  memo[n] = false;
  return false;
 };



console.log(newCanSum(7, [2,3],{})); //t
console.log(newCanSum(7, [5, 3, 4, 7], {})); //t
console.log(newCanSum(7, [2, 4],{}));  //f
console.log(newCanSum(8, [2, 3, 5],{})); //t
console.log(newCanSum(300, [7, 14], {})); //f
