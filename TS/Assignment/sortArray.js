function bubbleSort(arr) {
    var n = arr.length;
    var temp = 0;
    for (var i = 0; i < n; i++) {
        for (var j = 1; j < (n - i); j++) {
            if (arr[j - 1] > arr[j]) {
                //swap elements  
                temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
var a = [34, 12, 56, 89, 11];
console.log("Array Before Sorting :" + a);
bubbleSort(a);
console.log("Array After Sorting :" + a);
