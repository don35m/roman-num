var romanNum = function(num) {
  var output = '';
  // Set up key numerals and numeral pairs
  var romanNumber = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  var numbers = [1000,900,500,400,100,90,50,40,10,9,5,4,1,];
  // Set Validation range
  if ((num < 1) || (num > 3999)) {
    output += "Please enter a number from 1 - 3999!";
  } else {
  // Loop through each of the values to diminish the number
    for (var i = 0; i < 13; i++) {
      // If the number being converted is less than the test value, append
      // the corresponding numeral or numeral pair to the resultant string
      while(num >= numbers[i]) {
        output += romanNumber[i];
        num -= numbers[i];
      }
    }
  }
  return output;
};

$(document).ready(function() {

  $("form#number").submit(function(event) {

    var num = parseInt($("input#number").val());

    var result = romanNum(num);

    $(".romanNum").text(result);

    event.preventDefault();
  });
});
