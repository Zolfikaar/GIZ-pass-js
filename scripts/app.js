// let input = document.querySelector('input');
// // let textarea = document.querySelector('textarea');

// input.addEventListener('change', () => {
//     let files = input.files;

//     if(files.length == 0) return;

//     const file = files[0];

//     let reader = new FileReader();

//     reader.onload = (e) => {
//         const file = e.target.result;
//         // const lines = file.split(/\r\n|\n/);
//         // textarea.value = lines.join('\n');
//     };

//     reader.onerror = (e) => alert(e.target.error.name);

//     reader.readAsText(file); 
//     console.log(reader.readAsText(file));
// });

// // anothe solution

// const fileList = event.target.files;
// let fileContent = "";

// const fr = new FileReader();
// fr.onload = () => {
//   fileContent = fr.result;
//   console.log('Commands', fileContent);
// }

// fr.readAsText(fileList[0]);



// reading from text file

// const fs = require(['fs']);

// fs.readFile('data.txt', 'utf-8', (err, data) => {
//   if(err){
//     console.error(err);
//     return
//   }
//   console.log(data);
// });

// // putting the ordered array in new text file

// const content = 'varaible that hold the data from the existing file should be here';

// fs.appendFile('output.txt', content , err => {
//   if(err){
//     console.err;
//     return
//   }

// });

/*
############################################################################################################
Code above are attempts to fulfill TO-DO num.4,
unfortunately i couldn't (yet), because of the pressure and time limitations, but i'll figure it out
############################################################################################################
*/

/*############################################################################################################################################*/

/*
Optimized Bubble Sort

Optimized bubble sorts introduce a new variable. This variable[swapped] keeps track of whether a swap occurs. The sort will stop if no swaps have occurred.
*/

let numbsToSort = [5,8,0,1,9,11,15,16];
// let numbsToSort = data;
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

function sortArr(arr){
  ascSort(arr)
  descSort(arr)
}

sortArr(numbsToSort)