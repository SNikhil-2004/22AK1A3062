function isPrime(number) {
    if (number <= 1) {
        return false;
    }
   for (let i = 2; i * i <= number; ++i) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}
function getNextPalindrome(number) {
    while (true) {
        number++;
        const reversed = parseInt(number.toString().split('').reverse().join(''));
        if (number === reversed) {
            return number;
        }
    }
}
const testNumber = 17;
if (isPrime(testNumber)) {
    const nextPalindrome = getNextPalindrome(testNumber);
    console.log(`${testNumber} is a prime number. Next palindrome: ${nextPalindrome}`);
} else {
    console.log(`${testNumber} is not a prime number.`);
}
