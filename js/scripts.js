// Describe: 'romanNumeral()'
// Test: "It adds the value of the Roman Numerals together"
// Expect: (romanNumeral("MDCLXVI")).toEqual(1666)

const romanInput = "MDCLXVI";



function romanNumeral(number) {
  const romanArray = number.split("");
  let result = 0;
  let sumArray = [];
  console.log(romanArray);
  romanArray.forEach(function(element) {
    if (element === "M") {
      console.log("M detected")
      result += 1000;
    } else if (element === "D") {
      console.log("D detected")
      result += 500;
    } else if (element === "C") {
      console.log("C detected")
      result += 100;
    } else if (element === "L") {
      console.log("L detected")
      result += 50;
    } else if (element === "X") {
      console.log("X detected")
      result += 10;
    } else if (element === "V") {
      console.log("V detected")
      result += 5;
    } else if (element === "I") {
      console.log("I detected")
      result += 1;
    }
  });
  console.log("The roman number is = " + result);
}
romanNumeral(romanInput);