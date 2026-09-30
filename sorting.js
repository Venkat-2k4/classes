// function bubbleSort(arr){
//     for(let i =0; i<arr.length; i++){
//         for(let j =0;j<arr.length-i-1;j++){
//             if(arr[j] > arr[j+1]){
//                 const temp =arr[j];
//                 arr[j] = arr[j+1] ; 
//                 arr[j+1] = temp
//             } 
//         }
//     }
//     return arr
// }

// console.log(bubbleSort([9,8,5,7,1,6,4,2,3]))


// function selectionSort(arr){
//     let min =0
//     for(let i = 0;i<arr.length; i++){
//         for(let  j = i+1 ;j<arr.length ;j++){
//             if(arr[j] < arr[min]){
//                 min = j;
//             }
//         }
//     let temp = arr[i];
//     arr[i] = arr[min];
//     arr[min] = temp    
//     }
//     return arr
// }

// console.log(selectionSort([5,4,6,7,2,1,3]))

function insertionSort(arr){
    for(let i= 0;i<arr.length;i++){
        let temp = arr[i]
        let j =i-1;
        while(j>=0 && arr[j]>temp ){
            arr[j+1] = arr[j];
            j--
        }
        arr[j+1] = temp
    }
    return arr
}
console.log(insertionSort([5,4,6,7,2,1,3]))