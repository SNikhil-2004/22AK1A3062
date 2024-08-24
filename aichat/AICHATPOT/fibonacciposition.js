function fibonacciPosition(n) {
    let a = 0, b = 1, pos = 1;
    while (b < n) {
        let temp = a;
        a = b;
        b = temp + b;
        pos++;
    }
    if (b === n) {
        return pos;
    } else {
        return -1; // return -1 if n is not a Fibonacci number
    }
}

let n = 13; // input number
let position = fibonacciPosition(n);
if (position !== -1) {
    console.log(`The position of ${n} in the Fibonacci sequence is ${position}`);
} else {
    console.log(`${n} is not a Fibonacci number`);
}