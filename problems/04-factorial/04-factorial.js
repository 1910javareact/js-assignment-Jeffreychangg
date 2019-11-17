/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
    let answer=1;
    if(sumNum===0){
        return 1
    }else if(sumNum<0){
        console.log('you should enter a number greater than or equal to 0')
    }else{
        for(let i=sumNum;i>0;i--){
            answer=answer*i;
            
        }
    }

  return answer
};
console.log(factorial(3))