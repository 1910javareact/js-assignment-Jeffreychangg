/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    let newStr=''
    if(endIndex<=startIndex||endIndex>someStr.length-1||startIndex<0){
        console.log('are you serious? please enter a start index greater then 0 and an end index greater than start index and less or equal to the last index');
    }else{
    for(let i=startIndex;i<endIndex;i++){
        newStr=newStr+someStr[i];
    }
}
    return newStr
}
console.log(substring('heyheyyouyou',0,6))