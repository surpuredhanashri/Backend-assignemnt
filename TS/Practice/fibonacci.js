// //var counter:number=10;
// var a = 1;
// var b = 2;
// var c = 0;
// for (var i = 3; i <= 10; i++) {
//     c = a + b;
//     console.log(c);
//     a = b;
//     b = c;
// }


var n1 = 0,  n2 = 1, next_num, i;  
var num = parseInt (prompt (" Enter the limit for Fibonacci Series "));  
document.write( "Fibonacci Series: ");  
for ( i = 1; i <= num; i++)  
{  document.write (" <br> " +  n1); // print the n1  
    next_num = n1 + n2; // sum of n1 and n2 into the next_num  
      
    n1 = n2; // assign the n2 value into n2  
    n2 = next_num; // assign the next_num into n2  
}  