var romanNum = function(num) {
  var output = '';
  // Set up key numerals and numeral pairs
  var romanNumber = ["C","XC","L","XL","X","IX","V","IV","I"];
  var numbers = [100,90,50,40,10,9,5,4,1,];
  // Loop through each of the values to diminish the number
  for (var i = 0; i < 13; i++) {
    // If the number being converted is less than the test value, append
    // the corresponding numeral or numeral pair to the resultant string
    while(num >= numbers[i]) {
      output += romanNumber[i];
      num -= numbers[i];
    }
  }
  return output;
};
