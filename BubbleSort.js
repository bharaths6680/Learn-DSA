function bubbleSort (arrData = []) { 
  const output = [] 
  //here we will compare each element of current index and element of next index, if next index element is greater than current index than we will interchange values index
    for (let i = 0; i < arrData.length ; i++) { 
      for(let j = 0; j < arrData.length - 1 - i; j++){ 
        if (arr[j] > arr[j+1]){ 
          let temp = arr[j + 1]; 
          arr[j] = arr[j+1]; 
          arr[j+1] = temp; 
        } 
      }
    }
  return arrData;
} 


const arr = [5,3,8,4,2] 
const bubbleSortedData = bubbleSort(arr)
console.log("sorted data", bubbleSortedData);
