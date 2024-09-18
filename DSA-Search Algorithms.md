**What is Algorithms?**

*Algorithms are step-by-step instructions or procedures that solve a specific problem or perform a specific task.*

**In Computer Sceience** algorithms are fundamental to solving problems efficiently and effectively. They are designed to take inputs, process them using a series of logical steps, and produce desired outputs

*There are various types of algorithms, such as **sorting algorithms, searching algorithms, graph algorithms, and many more**. Each algorithm is designed to solve a specific type of problem or perform a specific task*

**Bubble Sort Algorithm**

*Bubble sort is nothing but compare each element with respect to next element, if it is greater than all remaining values will place at the end of index.*

``Javascript
const arr = [5,3,8,4,2]
const bubbleSortedData = bubbleSort(arr)
function bubbleSort (arrData = []) {
const output = []
for (int i = 0; i < arrData.length ; i++) {
  for(int j = 0; j < arrData.length - 1 - i; j++){
    if (arr[j] > arr[j+1]){
      let temp = arr[j + 1];
      arr[j] = arr[j+1];
      arr[j+1] = temp;
}
}
return arrData
}
}
``


