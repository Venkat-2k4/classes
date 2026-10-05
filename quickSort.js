function quickSort(arr, left=0, right=arr.length-1){
    if(left >=right) return arr
    
    
    const pivotIndex= findPivotIndex(arr, left ,right);
    quickSort(arr,left,pivotIndex-1)
    quickSort(arr,pivotIndex+1 , right)
    return arr
}
function  findPivotIndex(arr,left ,right){
    const pivot = arr[right];
    let  i = left -1;
    for(let j = left ; j<right ; j++){
        if(arr[j] < pivot){
            i++;
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] =temp
        }
    }
    
    i++;
    const temp = arr[i];
    arr[i] = arr[right];
    arr[right] =temp

    return i

}

console.log(quickSort([2,3,4,8,5,1,7]))


// function explore(param){
//     console.log(param())
// }
// function callback(){

// }

// explore(callback)

const arrow = ()=>10;
console.log(arrow())

const explore =() =>{
    return anotherFunction()
}

const anotherFunction = ()=>("YESSSSS")
console.log(explore())