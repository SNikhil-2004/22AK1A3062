// Function to reverse a string
function reverseString(str) {
    if (str.length === 0) {
      return "";
    } else {
      return reverseString(str.slice(1)) + str[0];
    }
  }
  
  // Test the function
  let str = prompt("Enter a string: ");
  let reversedStr = reverseString(str);
  
  console.log("Original String: " + str);
  console.log("Reversed String: " + reversedStr);