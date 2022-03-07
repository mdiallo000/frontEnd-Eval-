// ** I need to implement my own version of the map function.

// * 1. It accepts an array, 2. it accpets some callback function.
// * Inside of our map array we need to take in an array and for each element in that array we need to perfom the call back on it and then return a new array

const arrayMap = (arr, callBack) => {
  let newArr = [];

  for (let each of arr) {
    newArr.push(callBack(each));
  }

  return newArr;
};
