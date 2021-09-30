/*
Optimized Bubble Sort

Optimized bubble sorts introduce a new variable. This variable[swapped] keeps track of whether a swap occurs. The sort will stop if no swaps have occurred.
*/

let numbsToSort = [5,8,0,1,9,11,15,16];
console.log("Original numbers list: ", numbsToSort)

function ascSort(arr) {
  // by default the value of [swapped] is true
  let swapped = true

  do{
    // in each iteration of the list, we set the value of [swapped] to false
    swapped = false
  
    for(let j = 0 ; j < arr.length; j++)
    {
      // if the current index value is greater than the next one
      if(arr[j] > arr[j + 1])
      {
        // putting the current index value in a temporary varaible, then
        let temp = arr[j];
        // since we have a true condition! we swapping the next index value with the current one, then 
        arr[j] = arr[j + 1]
        // putting the current index value in the next index position
        arr[j + 1] = temp;
        // if a swap occurs, the value of [swapped] returns to the default value (true)
        swapped = true
      }
          
    }
  
  } while(swapped) // the while loop will execute until [swapped] is equal to false
  
  console.log("Numbers list After ASC sorting: ", arr)
  
  // if we have any operations that depends on/deals with the data that we preduce by the function, then we can use [return] instead of console.log

  // return arr
}

function descSort(arr) { 

  let swapped = true

  do{

    swapped = false
  
    for(let j = 0 ; j < arr.length; j++)
    {
  
      if(arr[j] < arr[j + 1])
      {
        let temp = arr[j];
        arr[j] = arr[j + 1]
        arr[j + 1] = temp;
        swapped = true
      }
          
    }
  
  } while(swapped)

  console.log("Numbers list After DESC sorting: ", arr)

  // return arr

}


let ascSortedNums = ascSort(numbsToSort)
let descSortedNums = descSort(numbsToSort)

