//==================Exercise #1 ==========//
/*Write a function that finds the index of the first non-consecutive element in the array. 
For example, if we have an array [1, 2, 3, 5, 6, 7] then this will return 3 since the array
at index 3 is 5 which is not consecutive. If every element in the array is consecutive, return -1
*/

function firstNonConsecutive (arr) {
    // default value
    let previous = arr[0];
    // make the variable
    let first;
    for (let i = 1; i < arr.length; i++) {
      if ((previous + 1) !== arr[i]) {
        first = arr[i];
        break;
      }
      previous ++;
    }
    return first !== undefined ? first : null;
  }


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

array1 == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(array1){
    // 1. define the array above
    // 2. if the index is divisible by two, then remove it--
    // 3. --and replace it with a string "even index"
}

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]