function decimalToBinary(decimal) {
  if (decimal === 0) {
    return '0';
  }

  return decimal.toString(2);
}

// Example usage:
const input1 = 7;
const input2 = 10;
const input3 = 33;

console.log(decimalToBinary(input1)); // Output: 111
console.log(decimalToBinary(input2)); // Output: 1010
console.log(decimalToBinary(input3)); // Output: 100001