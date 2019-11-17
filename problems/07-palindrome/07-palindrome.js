/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    l=someStr.length

        for(let i=0;i<l-1;i++){
            if(someStr[i]!=someStr[l-1-i]){
                console.log(`${someStr} is not a palindrome`);
                return false
            }else{
                console.log(`${someStr} is a palindrome`);
                return true 
            }

         }
};
console.log(isPalindrome("lol"))
