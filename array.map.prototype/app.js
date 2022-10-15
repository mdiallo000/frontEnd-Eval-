// ** I need to implement my own version of the map function.

// * 1. It accepts an array, 2. it accpets some callback function.
// * Inside of our map array we need to take in an array and for each element in that array we need to perfom the call back on it and then return a new array

Array.prototype.newMap = function (callback) {
  const result = [];
  for (let index = 0; index < this.length; index++) {
    // This is primarily to check if the item
    // exists in the array,
    if (this.indexOf(this[index]) > -1) {
      result[index] = callback(this[index], index, this);
    }
  }
  return result;
};
console.log(Array.prototype());
// ** the above method works. However it isn't a method just a function.To create our own method we need to use the Array.prototype to create a custom array method.

const Maps = function (callBack) {
  let newList = [];
  for (let i = 0; i < this.length; i++) {
    newList.push(callBack(this[i]));
  }

  return newList;
};
Array.prototype.myMAP = Maps;

console.log(nums.myMAP((num) => num++));

// ** Try and implement the filter function
// ** Filter brings back a new array
