function search(arr, a) {
    for (var i = 0; i < arr.length; i++) {
        if (a == arr[i]) {
            console.log("Element Found At index :" + i);
            return;
        }
    }
    console.log("Element Not Found");
}
var a = new Array(12, 34, 2, 4, 24, 5);
search(a, 10);
