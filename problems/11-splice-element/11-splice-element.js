/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    let l=someArr.length-1;
    if(index>l){
        console.log('invalid index')

    }else if(index===0){
        let newArr='';
        for(let i=0;i<l;i++){
        
            newArr=newArr+someArr[i+1]

        }
        return newArr
    }else if(index===l){
        let newArr2='';
        for(let i=0;i<l;i++){
            newArr2=newArr2+someArr[i]            
        }
        return newArr2
    }else{
        let arr1=''
        let arr2=''
        let newArr3=''
        for(let i=0;i<index;i++){
            arr1=arr1+someArr[i]
        }
        for(let i=index;i<l;i++){
            arr2=arr2+someArr[i+1]
        }
       // newArr3=[...arr1,...arr2]
       newArr3=arr1.concat(arr2);
        return newArr3
    }

}
console.log(spliceElement([0,1,2,3,4,5,6],4))
