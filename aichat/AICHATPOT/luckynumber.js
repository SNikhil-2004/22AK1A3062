function calculateLuckyNumber(dob) {
    // Split the date of birth into day, month, and year
    const [day, month, year] = dob.split('-');

    // Calculate the sum of the digits of the date of birth
    let sum = (parseInt(day) + parseInt(month) + parseInt(year)).toString().split('').reduce((a, b) => +a + +b, 0);

    // If the sum is more than 9, calculate the single digit sum
    while (sum > 9) {
      sum = sum.toString().split('').reduce((a, b) => +a + +b, 0);
    }

    return sum;
}

// Test the function
const dob = '24-11-2004';
const luckyNumber = calculateLuckyNumber(dob);
console.log(`The lucky number of the person born on ${dob} is ${luckyNumber}`);