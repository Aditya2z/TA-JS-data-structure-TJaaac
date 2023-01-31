// 1. Create an array named numbers and store 5 number values in it
let numbers = [10, 50, 60, 78, 51];

// 2. Calculate the sum of array items and print it to the console using console.log()
console.log(`Sum of Numbers`);
let sum = 0;
for(let number of numbers) {
    sum = sum + number;
}
console.log(sum);

// 3. Calculate the average of array items and print it to the console using console.log()
console.log(`Average of Number`);
let average =  sum / numbers.length;
console.log(average);

// 4. Find the highest number in the array and print it to the console using console.log()
console.log(`Highest Number`);
let highest = numbers[0];
for(i = 0; i <= numbers.length - 2; i++) {
    if(numbers[i] > highest) {
        highest = numbers[i];
    }
}
console.log(highest);

// 5. Find the lowest number in the array and print it to the console using console.log()
console.log(`Lowest Number`);
let lowest = numbers[0];
for(i = 0; i <= numbers.length - 2; i++) {
    if(numbers[i] < lowest) {
        lowest = numbers[i];
    }
}
console.log(lowest);

// 6. Find the even numbers in the array and print them to the console using console.log()
console.log(`Even Numbers`);
for(i = 0; i <= numbers.length - 1; i++) {
    if(numbers[i] % 2 === 0) {
       console.log(numbers[i]);
    }
}

// 7. Find the odd numbers in the array and print them to the console using console.log()
console.log(`Odd Numbers`);
for(i = 0; i <= numbers.length - 1; i++) {
    if(numbers[i] % 2 !== 0) {
       console.log(numbers[i]);
    }
}

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
console.log(`Numbers divisible by 5`);
for(i = 0; i <= numbers.length - 1; i++) {
    if(numbers[i] % 5 === 0) {
       console.log(numbers[i]);
    }
}

// 9. Log all the element of the array one by one
console.log(`All elements of array`);
for(i = 0; i <= numbers.length - 1; i++) {
       console.log(numbers[i]);
}

// 10. Find all the number in the array that is divisible by 3
console.log(`Numbers divisible by 3`);
for(i = 0; i <= numbers.length - 1; i++) {
    if(numbers[i] % 3 === 0) {
       console.log(numbers[i]);
    }
}