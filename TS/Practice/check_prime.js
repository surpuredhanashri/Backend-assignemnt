var num = 6;
if (num != 0 && num != 1 && num != 2) {
    var counter = 0;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            counter++;
            break;
        }
    }
    if (counter == 0)
        console.log("Prime number");
    else
        console.log("Not a prime number");
}
else if (num == 2)
    console.log("Prime number");
else
    console.log("Not a prime number");
