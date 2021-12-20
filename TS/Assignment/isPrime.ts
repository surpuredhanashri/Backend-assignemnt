 function isPrime(n:number) {  
       if (n <= 1) {  
           return false;  
       }  
       for (var i :number= 2; i < Math.sqrt(n); i++) {  
           if (n % i == 0) {  
               return false;  
           }  
       }  
       return true;  
   }  

   console.log("The Number is Prime : "+isPrime(12));