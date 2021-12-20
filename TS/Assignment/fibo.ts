function fibonaciiNumber(n:number){
	var num1 :number= 0;
	var num2:number = 1;
	console.log("Fibonacci Series of "+n+" numbers:");
    for(let i= 1; i <= n; i++)
    {
    	console.log(num1+" ");
       var sumOfPrevTwo:number = num1 + num2;
        num1 = num2;
        num2 = sumOfPrevTwo;
        }	
}

fibonaciiNumber(10);