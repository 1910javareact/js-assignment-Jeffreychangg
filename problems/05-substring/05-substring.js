/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    let newStr=''
    if(typeof(someStr)!=='string'){
       throw`please enter a start index greater then 0 and an end index greater than start index and less or equal to the last index`
    }else if(typeof(endIndex)!=="number"){
        throw`endIndex should be a number`
    }else if(typeof(startIndex)!=="number"){
        throw`startIndex should be a number`
    }else if(endIndex<=startIndex||endIndex>someStr.length-1||startIndex<0){
        throw`please enter a string`
    }else{
    for(let i=startIndex;i<endIndex;i++){
        newStr=newStr+someStr[i];
    }
}
    return newStr
}
console.log(substring("asdfasdfas",4,6))