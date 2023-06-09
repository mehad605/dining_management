//create a function that takes input number from user and says nice//

function sayNice() {
  var inputNumber = prompt("Enter a number");
  var output = "";
  for (var i = 1; i <= inputNumber; i++) {
    output += "nice ";
  }
  return output;
}
sayNice();
