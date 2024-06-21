function performOperation() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result = '';

    switch (operation) {
        case 'add':
            result = `The sum of ${num1} and ${num2} is ${num1 + num2}`;
            break;
        case 'subtract':
            result = `The difference between ${num1} and ${num2} is ${num1 - num2}`;
            break;
        case 'multiply':
            result = `The product of ${num1} and ${num2} is ${num1 * num2}`;
            break;
        case 'divide':
            result = `The quotient of ${num1} divided by ${num2} is ${num1 / num2}`;
            break;
        case 'modulo':
            result = `The remainder of ${num1} divided by ${num2} is ${num1 % num2}`;
            break;
        case 'isPrime':
            result = `${num1} is ${isPrime(num1) ? '' : 'not '}prime. ${num2} is ${isPrime(num2) ? '' : 'not '}prime.`;
            break;
        case 'fibonacci':
            result = `The Fibonacci sequence starting from ${num1} and ${num2} is ${fibonacci(num1, num2).join(', ')}`;
            break;
        case 'all':
            result = `The sum of ${num1} and ${num2} is ${num1 + num2}\n`;
            result += `The difference between ${num1} and ${num2} is ${num1 - num2}\n`;
            result += `The product of ${num1} and ${num2} is ${num1 * num2}\n`;
            result += `The quotient of ${num1} divided by ${num2} is ${num1 / num2}\n`;
            result += `The remainder of ${num1} divided by ${num2} is ${num1 % num2}\n`;
            result += `${num1} is ${isPrime(num1) ? '' : 'not '}prime. ${num2} is ${isPrime(num2) ? '' : 'not '}prime.\n`;
            result += `The Fibonacci sequence starting from ${num1} and ${num2} is ${fibonacci(num1, num2).join(', ')}`;
            break;
    }

    document.getElementById('result').innerText = result;
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function fibonacci(num1, num2) {
    let seq = [num1, num2];
    for (let i = 2; i < 20; i++) {
        seq.push(seq[i-1] + seq[i-2]);
    }
    return seq;
}
