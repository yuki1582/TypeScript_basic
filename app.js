var userName = "Max";
// let ブロックスコープ
// var グローバル、関数スコープのどちらかにしかならない
var age = 30;
age = 29;
// function add(a: number, b: number) {
//     var result;
//     result = a + b;
//     return result;
// }
// defaultは右側か全て指定
var add = function (a, b) {
    if (b === void 0) { b = 1; }
    return a + b;
};
var printOutput = function (output) {
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
var button = document.querySelector("button");
if (button) {
    button.addEventListener("click", function (event) {
        console.log(event);
    });
}
