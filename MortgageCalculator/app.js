let interestNode = document.querySelector('.interest');
let lengthNode = document.querySelector('.length');
let principalNode = document.querySelector('.principal');
let textContent = document.querySelector('.content');

let btn = document.querySelector('.btn');

btn.addEventListener('click', (event) => {
  event.preventDefault();

  //  ** Get all the input values from each input field and store them
  let principalAmount = principalNode.value;
  let length = lengthNode.value;
  let interest = interestNode.value;

  //  ** Now use the variable to solve the problem in pieces
  let realength = length * 12;
  let realInterest = interest / 100 / 12;
  let top = realInterest * Math.pow(1 + realInterest, realength);
  let bottom = Math.pow(1 + realInterest, realength) - 1;
  let sum = top / bottom;

  let MonthlyPay = principalAmount * sum;
  let FinalAnswer = Math.round(MonthlyPay);
  textContent.innerHTML = `Your monthly mortagage payment will be $${FinalAnswer}`;
});
// ** The formula to find the monthly payments
//   ** P(r(1+r)^n/((1+r)^n)-1))
