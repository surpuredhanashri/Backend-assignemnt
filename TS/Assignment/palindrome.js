function palindrome(unionData) {
    var str;
    if (typeof (unionData) == 'number') {
        str = unionData.toString();
    }
    else {
        str = unionData;
    }
    var size = str.length;
    for (var i = 0; i < size / 2; i++) {
        if (str[i] !== str[size - i - 1]) {
            return "Not a Palindrome ";
        }
    }
    return "palindrome";
}
console.log(palindrome(151));
console.log(palindrome(123));
console.log(palindrome('MALAYALAM'));
console.log(palindrome('son'));
