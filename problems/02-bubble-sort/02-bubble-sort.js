/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    
    for(let i=0;i<numArray.length;i++){
        for(let j=i+1;j<numArray.length;j++){
            if(numArray[j]<numArray[i]){
                let temp=numArray[j];
                numArray[j]=numArray[i];
                numArray[i]=temp;
            }
        }
        
    }
    return numArray
};

console.log(bubbleSort([1,1000,4,8,555,99,42,36,0]))