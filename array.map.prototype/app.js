// ** I need to implement my own version of the map function.

// * 1. It accepts an array, 2. it accpets some callback function.
// * Inside of our map array we need to take in an array and for each element in that array we need to perfom the call back on it and then return a new array

const arrayMap = (arr, callBack) => {
  let newArr = [];
  // if(arr.length ===0){
  //     return undefined
  // }

  for (let each of arr) {
    newArr.push(callBack(each));
  }

  return newArr;
};

function Addnums(x) {
  return x * '200';
}

let nums = [2, 3, 4, 5, 6];
console.log(arrayMap(nums, Addnums));
// ** the above methode works. However it isnt a method just a function To create our own methode we need to use the Array.prototype to create a custom arry method.

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
