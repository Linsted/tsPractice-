"use strict";
const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
let age = 50;
let userName = "John";
let toogle = false;
let empty = null;
let notInitialize = undefined;
let callback;
callback = (a) => { return 100 + a; };
let anything;
anything = -20;
anything = 'Text';
anything = {};
let some;
some = 'Text';
let str;
if (typeof some === 'string') {
    str = some;
}
let person;
person = ['Max', 21];
var LoadingStatus;
(function (LoadingStatus) {
    LoadingStatus[LoadingStatus["LOADING"] = 0] = "LOADING";
    LoadingStatus[LoadingStatus["READY"] = 1] = "READY";
})(LoadingStatus || (LoadingStatus = {}));
const page = {
    load: LoadingStatus.READY
};
page.load === LoadingStatus.LOADING ? console.log('Сторінка завантажується') : console.log('Сторінка завантажена');
let someVariable;
let anotherVariable;
function showMessage(message) {
    console.log(message);
}
showMessage("hello world 1 2 3 !");
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
;
const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
};
const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
