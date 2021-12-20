function fibo(n:number){
    var a1:number = 0;
    var a2:number = 1;
    
    
    for(let i = 1;i<=n;i++){
        console.log(a1);
        var a3:number = a1 + a2;
        a1 = a2;
        a2 = a3;
        }
    }
    fibo(10);