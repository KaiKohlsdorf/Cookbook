function galToL(gallon) {
  return gallon * 3.785412;
}
const gallon = parseInt(prompt("Enter number of Gallons to convert to Liters:"));

alert(galToL(gallon));