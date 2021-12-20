var limit:number=10;

function checkprime1(num:number){
    if(num!=0 && num!=1 && num!=2){
        var counter=0
        for(var i=2;i<=Math.sqrt(num);i++){
            if (num%i==0){
                counter++;
                break;
            }
        }
        if(counter==0)
            return true;
        else
            return false;
    }
    else if(num==2)
        return true;
    else
        return false;
}
var num1:number=1;
while(limit>0){
    if(checkprime1(num1)){
        console.log(num1)
        limit--;
    }
    num1++;
}