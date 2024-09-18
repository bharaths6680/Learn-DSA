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
