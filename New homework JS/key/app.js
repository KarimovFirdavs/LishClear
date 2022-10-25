// let num = "10";
// let secondnum = [...num];
// let thirdNum = secondnum.reverse();
// secondnum.join('');
// let fourthNum = secondnum.join('');
// if (num == fourthNum) {
//     console.log("True");
// } else {
//     console.log("False");
// }
// console.log(fourthNum);

let numbers = [2, 7, 15, 9, 56];
function number(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        for (let k = i + 1; k < numbers.length; k++) {
            if (arr[i] + arr[k] == num) {
                console.log(`[${i}, ${k}]`);
            }
        }
    }
}
number(numbers, 58);