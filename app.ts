const userName = "Max";

// let ブロックスコープ
// var グローバル、関数スコープのどちらかにしかならない
let age = 30;

age = 29;

// function add(a: number, b: number) {
//     var result;
//     result = a + b;
//     return result;
// }
// defaultは右側か全て指定
const add = (a: number, b: number = 1) => a + b;

const printOutput: (output: string | number) => void = output => {
  console.log(output);
};

printOutput(add(2));
// if (age >= 20) {
//     var isAdult = true;
// }
// console.log(isAdult);

// if (age >= 20) {
//     let isAdult = true;
// }
// console.log(isAdult);

const button = document.querySelector("button");
if (button) {
    button.addEventListener("click", event => {
        console.log(event);
    })
}