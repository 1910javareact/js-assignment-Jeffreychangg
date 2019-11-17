/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */ //<--what the hell
function isEven(someNum) {

    if(someNum>0){
        for(let i=0;i*2<=someNum;i++){
                if(2*i===someNum){
                    console.log(`${someNum} is an even number`);
                    return true
                }else if(2*i+1===someNum){
                    console.log(`${someNum} is an odd number`);
                        return false
                }
        }
    }else if(someNum<0){
        for(let i=0;i*2>=someNum;i--){
            if(2*i===someNum){
                console.log(`${someNum} is an even number`);
                return true
            }else if(2*i-1===someNum){
                console.log(`${someNum} is an odd number`);
                    return false
                }
            }
        }else{
            console.log(`${someNum} is an even number`)
            return true
        }
  
};
console.log(isEven(2))