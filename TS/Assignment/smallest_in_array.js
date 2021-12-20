var arr = new Array(56, 78, 89, 90, 12);
var min = Number.MAX_VALUE;
for (var i1 in arr) {
    if (min > arr[i1])
        min = arr[i1];
}
console.log("Minimum number is : " + min);
