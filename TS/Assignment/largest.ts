function largest(a:number,b:number ,c:number)
{
	if(a>=b &&  a>=c){
		console.log(a+" is the largest Number");
	}
	else if(b>=a && b>=c){
		console.log(b+" is the largest Number");
	}
	else{
		console.log(c+" is the largest Number");

	}
}

largest(10,20,30);