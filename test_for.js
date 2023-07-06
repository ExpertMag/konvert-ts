"use strict";
function generate(n) {
    let array = [];
    for (let i = 0; i <= n; i++) {
        array.push(i);
    }
    return array;
}
function generate2(n) {
    let array = [];
    let a = 1;
    if (n < 0) {
        a = -1;
        n = n * (-1);
    }
    for (let i = 0; i <= n; i++) {
        array.push(i * a);
    }
    return array;
}
function degenerate(n) {
    let array = [];
    let a = 0;
    let b = 1;
    if (n < 0) {
        b = -1;
        n = n * b;
    }
    while (n > array.length) {
        array.push(a = a + 1 * b);
    }
    return array;
}
function generateWithSteps(firstNumber, secondNumber, step) {
    let array = [];
    array.push(firstNumber);
    let d = firstNumber;
    for (let i = 0; secondNumber - d >= step; i++) {
        array.push(d = d + step);
    }
    return array;
}
function generateWithSteps2(firstNumber, secondNumber, step) {
    let array = [];
    for (let i = firstNumber; secondNumber - i >= step; (i = i + step)) {
        array.push(i);
    }
    return array;
}
function generateWithSteps3(firstNumber, secondNumber, step) {
    let array = [];
    if (secondNumber > firstNumber) {
        let d = firstNumber;
        array.push(d);
        for (let i = 0; secondNumber - d >= step; i++) {
            array.push(d = d + step);
        }
    }
    else {
        let e = firstNumber;
        array.push(e);
        for (let i = 0; e - secondNumber > secondNumber; i++) {
            array.push(e = e - step);
        }
    }
    return array;
}
