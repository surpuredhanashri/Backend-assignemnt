var limit = 10;
function checkprime(num) {
    if (num != 0 && num != 1 && num != 2) {
        var counter = 0;
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                counter++;
                break;
            }
        }
        if (counter == 0)
            return true;
        else
            return false;
    }
    else if (num == 2)
        return true;
    else
        return false;
}
var num1 = 1;
while (limit > 0) {
    if (checkprime(num1)) {
        console.log(num1);
        limit--;
    }
    num1++;
}
