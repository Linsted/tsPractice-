const button = document.querySelector("button") !;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});

//  LESSON 2

let age: number = 50;
let userName: string = "John";
let toogle: boolean = false;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback: (a: number) => number;
callback = (a) => { return 100 + a };
 
let anything: any;
anything = -20;
anything = 'Text';
anything = {};



let some:unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') { str = some; }



let person: [string, number];
person = ['Max', 21]


enum LoadingStatus { LOADING, READY }

const page = {
  load: LoadingStatus.READY 
}

page.load === LoadingStatus.LOADING ? console.log('Сторінка завантажується') : console.log('Сторінка завантажена');



let someVariable: string | number;
let anotherVariable: 'enable' | 'disable';





function showMessage(message: string): void {
  console.log(message);
}

showMessage("hello world!");

function calc(num1:number, num2:number):number {
  return num1 + num2;
}

function customError():never {
  throw new Error('Error');
};


type pageTypes = {
  title: string,
  likes: number,
  accounts: string[],
  status: "open" | "close",
  details?: {createAt: Date, updateAt: Date}



}

const page1: pageTypes = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}



const page2:pageTypes = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}






