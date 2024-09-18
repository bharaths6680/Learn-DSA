**What is Algorithms?**

*Algorithms are step-by-step instructions or procedures that solve a specific problem or perform a specific task.*

**In Computer Sceience** algorithms are fundamental to solving problems efficiently and effectively. They are designed to take inputs, process them using a series of logical steps, and produce desired outputs

*There are various types of algorithms, such as **sorting algorithms, searching algorithms, graph algorithms, and many more**. Each algorithm is designed to solve a specific type of problem or perform a specific task*

**Bubble Sort Algorithm**

*Bubble sort is nothing but compare each element with respect to next element, if it is greater than all remaining values will place at the end of index.*
**To sort elements in an array by repeatedly comparing and swapping elements in an array**

**Note: Bubble sort is inefficiency to solve the problems for the large data set, especially it will more time resulting to a time complexity issue**

**Suitable sorting algorithms that are more efficient than bubbleSort for large datasets:**

1. **Merge Sort:**  Merge sort is a divide-and-conquer algorithm that divides the array into smaller subarrays, sorts them individually, and then merges them back together
2. **Quick Sort:** Quick sort is another divide-and-conquer algorithm that selects a pivot element and partitions the array around it. It recursively sorts the subarrays on either side of the pivot
3. **Heap Sort:** Heap sort uses a binary heap data structure to sort the array. It first builds a max heap from the array and then repeatedly extracts the maximum element and places it at the end of the array.
4. **Radix Sort:** Radix sort is a non-comparative sorting algorithm that sorts the elements by their individual digits or bits. It processes the digits or bits from the least significant to the most significant, resulting in a linear time complexity.
   
   

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

**Linear search Algortithm**

*Linear search is nothing but compare the each index value with given target and return the matching element and if there is no element found than we will return default value*
``javascript
function linearSearch (arr, target) {
for (let i =0; i < arr.length; i++) {
    if (arr[i] === target) {
    return i;
    }
 }
  return -1;
}

const arr = [5,3,4,7,2,1]
const target = 4;
const result = linearSearch(arr, target);
if (result !== -1) {
  console.log("Element found at the index " + result);
} else {
  console.log("No Element found");
}
``

**Note: 

