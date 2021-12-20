 

var iArrNumbers = new Array (610, 20, 4500, 25, 65);
var iMax:number=0;
console.log ("With for...in")

for (var iIndex in iArrNumbers)
{
    if (iArrNumbers[iIndex] > iMax)
    iMax = iArrNumbers[iIndex];
}
console.log ("Elements of the array : " + iArrNumbers )

console.log ("Largest element in the array is "+iMax);

 
