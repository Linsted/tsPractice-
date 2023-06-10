var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
//  LESSON 2
var age = 50;
var userName = "John";
var toogle = false;
var empty = null;
var notInitialize = undefined;
var callback;
callback = function (a) { return 100 + a; };
var anything;
anything = -20;
anything = 'Text';
anything = {};
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    str = some;
}
var person;
person = ['Max', 21];
var LoadingStatus;
(function (LoadingStatus) {
    LoadingStatus[LoadingStatus["LOADING"] = 0] = "LOADING";
    LoadingStatus[LoadingStatus["READY"] = 1] = "READY";
})(LoadingStatus || (LoadingStatus = {}));
var page = {
    load: LoadingStatus.READY
};
page.load === LoadingStatus.LOADING ? console.log('Сторінка завантажується') : console.log('Сторінка завантажена');
var someVariable;
var anotherVariable;
function showMessage(message) {
    console.log(message);
}
showMessage("hello world!");

function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
;
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
