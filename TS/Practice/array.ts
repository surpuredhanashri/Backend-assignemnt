//arrays in ts

var strarr = new Array("mongo","Express","Angular","Node")
console.log("with for...in")
for (var iIndex in strarr)
    console.log (strarr[iIndex])

console.log ("with for ...of")
for (var strData of strarr)
    console.log(strData)

console.log ("\n with for loop iteration using length")

for(var iData = 0; iData< strarr.length;++iData)
    console.log(strarr[iData])