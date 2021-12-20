var num1 = 10, num2 = 20, num3 = 30;
function max(num1, num2, num3) {
    var res;
    if (num1 > num2 && num1 > num3)
        return res = num1;
    else if (num2 > num1 && num2 > num3)
        return res = num2;
    else
        return num3;
}
function min(num1, num2, num3) {
    var res;
    if (num1 < num2 && num1 < num3)
        return res = num1;
    else if (num2 < num1 && num2 < num3)
        return res = num2;
    else
        return num3;
}
console.log("Minimum number is " + min(num1, num2, num3));
console.log("Maximum number is " + max(num1, num2, num3));
