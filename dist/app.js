"use strict";
// const userName = "Max";
// let ブロックスコープ
// var グローバル、関数スコープのどちらかにしかならない
// let age = 30;
// age = 29;
// function add(a: number, b: number) {
//     var result;
//     result = a + b;
//     return result;
// }
// defaultは右側か全て指定
// const add = (a: number, b: number = 1) => a + b;
// const printOutput: (output: string | number) => void = output => {
//   console.log(output);
// };
// printOutput(add(2));
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
    });
}
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];
// 配列から全ての値を取り出す
activeHobbies.push(...hobbies);
const person = {
    firstName: "Max",
    age: 20,
};
const copiedPerson = Object.assign({}, person);
// レストパラメータ
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add(5, 10, 2, 3, 7);
console.log(addedNumbers);
// 分割代入
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);
const { firstName: userName, age } = person;
console.log(userName, age, person);
//# sourceMappingURL=app.js.map