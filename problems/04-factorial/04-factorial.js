/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {

    if(sumNum===0){
        return 1
    }else if(sumNum<0){
        console.log('you should enter a number greater than or equal to 0')
    }else{
                return sumNum*factorial(sumNum-1)
        }
    


};
console.log(factorial(1))