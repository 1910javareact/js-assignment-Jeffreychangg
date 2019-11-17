/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    let newStr=""
    let n=someStr.length-1;
    for(let i=0;i<someStr.length;i++){
        newStr=newStr+someStr.charAt(n-i);
        
    }
    return newStr
};
console.log(reverseStr('hello'))