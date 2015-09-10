var romanNum = function(num) {
  var output = '';
  var romanNumber = ["I"];
  var numbers = [1];
  for (var i = 0; i < numbers.length; i++) {
    while(num >= numbers[i]) {
      output += romanNumber[i];
      num -= numbers[i];
    }
  }
  return output;
};
