// let arr =[2,4,6]
// let arr2 = [1,3,5,6,7]
// //[1,2,3,4,5,6,6,7]

// function mergeSortedArrays(arr,arr2){
// let i = 0 ;
// let j = 0;
// let res = []
// while(i<arr.length && j<arr2.length){
//     if(arr[i] < arr2[j]){
//         res.push(arr[i])
//         i++
//     }else{
//         res.push(arr2[j])
//         j++
//     }
// }

//     while(j<arr2.length){
//         res.push(arr2[j])
//         j++
//     }

//     while(i<arr.length){
//         res.push(arr[i])
//         i++
//     }



//     return res
// }


// console.log(mergeSort(arr,arr2))


function mergeSort(arr){
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length/2);

    let left = arr.slice(0,mid);
    let right = arr.slice(mid);

    left = mergeSort(left);
    right  = mergeSort(right)
    
    console.log(left,right)
    
}
mergeSort([2,1,4,3,7,9,8,6])