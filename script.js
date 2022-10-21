// prime Number check
let prime = 31;
let check = true;

for (let i = 2; i < prime; i++) {
    if (prime % i == 0) {
        check = false;
        break;
    }
}
if (check) {
    console.log("prime")
}
else {
    console.log("not prime")
}
let sum = "";
for (let i = 1; i <= 10; i++) {
    sum = sum + i;
    // console.log(sum);
}
// pattern
var n = 10;
var string = "";

for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= i; j++) {
        string += j;
    }

    string += "\n";
}

// console.log(string);

// inche to feet
let inche = 156;
let feet = inche / 12;
// console.log(feet);

function inchetoFeet(inche) {
    let feet = inche / 12;
    return feet;
}
const result = inchetoFeet(132);
// console.log(result)

var String = "";
for (var i = 1; i < 6; i++) {
    String += i;
    //   console.log(String)
}
// odd and even numbers
for (let i = 10; i <= 50; i++) {
    if (i % 2 == 1) {
        continue;
    }
    else {
        // console.log(i);
    }
}
// 1-100 prime number
for (var counter = 0; counter <= 100; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter % i === 0 && i !== counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
        // console.log(counter);
    }
}



let km = 4;
let miles = km / 1.60934;
// console.log(miles);



// const number = 145;
function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

const mynumbers = isEven(26585);
// console.log(mynumbers);
function leapyear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return true;
    }
    else {
        return false;
    }
}
const myYear = 2100;
const result4 = leapyear(myYear);
// console.log(result4);

// factorial number
let factorial = 1;
for (let i = 1; i <= 6; i++) {
    factorial = factorial * i;
}
// console.log(factorial);

// fibonacci sequence

// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
// 5th = 4th+3th 
// 6th = 5th+4th
// nth= (n-1)th + (n-2)th
// ith = (i-1)th + (i-2)th
let fibo = [0, 1];
for (let i = 2; i <= 5; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2]
    // console.log(fibo);
}



// largest Element of array

function largestNumber(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i]
        // console.log(element);
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

const ages = [45, 23, 54, 65, 90];
const oldages = largestNumber(ages)
// console.log(oldages);

const array = [23, 4, 5, 24, 67, 8];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element % 2 == 1) {
        continue;
    }
    else {
        console.log(element)
    }

}

// do not variable declare symbol
// @#%^*();:""&
// []
// {},12+-/~

// let String = 2;


function variousBill(unit) {
    let firstPerUnit = 5;
    let secondPerUnit = 10;
    let thirdPerUnit = 15;
    let fourPerUnit = 25;
    if (unit <= 400) {
        let bill = unit * firstPerUnit;
        return bill;
    }
    else if (unit <= 1500) {
        let firstCurrentBil = 400 * firstPerUnit;
        let remainingBill = unit - 400;
        let secondCurrentBill = remainingBill * secondPerUnit;
        // console.log(secondCurrentBill);
        let totalbill = firstCurrentBil + secondCurrentBill;
        return totalbill;
    }
    else if (unit <= 5000) {
        let firstCurrentBil = 400 * firstPerUnit;
        // console.log(firstCurrentBil)
        let secondCurrentBill = 1100 * secondPerUnit;
        let remainingBill = unit - 1500;
        let thirdCurrentBill = remainingBill * thirdPerUnit;
        console.log(thirdCurrentBill);
        let totalBill = thirdCurrentBill + secondCurrentBill + firstCurrentBil;
        return totalBill;
    }
    else {
        let firstCurrentBil = 400 * firstPerUnit;
        // console.log(firstCurrentBil)
        let secondCurrentBill = 1100 * secondPerUnit;
        let thirdCurrentBill = 3500 * thirdPerUnit;
        let remainingBill = unit - 5000;
        let fourthCurrentBill = remainingBill * fourPerUnit;
        let totalBill = firstCurrentBil + secondCurrentBill + thirdCurrentBill + fourthCurrentBill;
        return totalBill;
    }

}

const currentBill = variousBill(290);
console.log("Current Bill:", currentBill);

const gasBill = variousBill(360);
console.log('Gas Bill:', gasBill)

const waterBill = variousBill(140);
console.log('Water Bill:', waterBill)

const telephoneBill = variousBill(700);
console.log('Water Bill:', telephoneBill);

const internetBill = variousBill(100);
console.log('Water Bill:', internetBill);

const tvBill = variousBill(50);
console.log('Water Bill:', tvBill);

let subtratBill = (gasBill * 0.01) + (waterBill * .01) + (telephoneBill * .01) - 20;

let totalBill = subtratBill + gasBill + waterBill + telephoneBill + tvBill + internetBill + currentBill;
console.log("totalBill:", totalBill);

