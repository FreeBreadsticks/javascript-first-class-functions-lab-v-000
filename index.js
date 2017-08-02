function countdown(callback) {
  window.setTimeout(callback, 2000);
}

function createMultiplier(multiplierValue) {
  return function(number) {
    return multiplierValue * number;
  };
}


function multiplier(multiplierValue, value) {
  return multiplierValue * value;
}

var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);

function doubler() {

}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);
