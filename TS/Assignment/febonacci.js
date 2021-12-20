function fibo(n) {
    var a1 = 0;
    var a2 = 1;
    for (var i = 1; i <= n; i++) {
        console.log(a1);
        var a3 = a1 + a2;
        a1 = a2;
        a2 = a3;
    }
}
fibo(10);
