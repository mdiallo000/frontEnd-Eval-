// ** The filer method comes from the array prototype.
// * It essentially return a new array of the items that fufill the filter parameter
//**    */ Thought process Pseudocode
// A function which takes a function as an argument and an optional parameter for execution context
// The function argument must be passed the array index, the item and the context
// The result of the callback invocation is tested, if true the array element is pushed to a new array item

Array.prototype.newFiler = function (callback) {
  let result = [];

  for (let index = 0; index < this.length; index++) {}
};
