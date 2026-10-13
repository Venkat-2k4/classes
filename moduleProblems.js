// function spiralOrder(matrix) {
//     // Write your solution here
// let res =[]
// let top = 0;
// let left = 0;
// let right = matrix[0].length-1;
// let bottom = matrix.length-1;
// while(left<=right && top <= bottom){
//     for(let i= left ;i<= right ;i++){
//         res.push(matrix[top][i])
//     } top++;
//     for(let i =top ; i<=bottom ;i++){
//         res.push(matrix[i][right])
//     }right--;
    
//     if(top<=bottom){
//     for(let i = right ;i>=left;i--){
//         res.push(matrix[bottom][i])
//     }
// }bottom --

// if(left<=right){
//     for(let i = bottom ; i>=top;i--){
//         res.push(matrix[i][left])
//     }
//     }left++

// }
// return res
// }

// const matrix = 
// [[1, 2, 3 ,4],
// [5, 6 ,7 ,8],
// [9 ,10 ,11 ,12]]

// console.log(spiralOrder(matrix))


// function mergeSort(arr) {
//     // Write your solution here
//     if(arr.length <=1) return arr;
    
//     let mid = Math.floor((0+arr.length)/2)
//     let left = arr.slice(0,mid);
//     let right = arr.slice(mid);

//     left = mergeSort(left);
//     right = mergeSort(right)

//     return mergeSorted(left,right)
    
// }
// function mergeSorted(arr1,arr2){
//     let res = []
//     let i =0;
//     let j = 0;
//     while(i<arr1.length && j<arr2.length){
//         if(arr1[i] < arr2[j]){
//             res.push(arr1[i]);
//             i++
//         }else{
//             res.push(arr2[j]);
//             j++; 
//         }
// }
//     while(i<arr1.length){
//         res.push(arr1[i]);
//         i++
//     }    
//     while(j<arr2.length){
//         res.push(arr2[j])
//         j++
//     }
//     return res

// }

// console.log(mergeSort([38 ,27 ,43, 3, 9, 82, 10 ,1]))

function twoSum(nums, target) {
    // Write your solution here
    let res = []
    let map = new Map();
    for(let i in nums) {
        map.set(nums[i] ,i)
    }
    for(let i in nums){    
        if(map.get(target - nums[i]) != i ){
            res.push(i)
        }
    }

    return res;
}
const arr =[3,2,4]
console.log(twoSum(arr,6))