// const people = ["venkat", "karthik","annnaram"]
// console.log(people[0])

// for(let person of people ){
//     console.log(person)
// }
// people.push("dp")
// people.push("bob")
// for(let i =0 ; i< people.length; i++){
//     console.log(people[i])
// }

// for(let i = people.length ; i>3;i--){
//     let popped = people.pop()
//     console.log(`popped ${popped}`)
// }
// for(let person of people){
//     console.log(`${person} is still in the array`)
// }

// people.unshift("neeraj" , "yaswanth");

// console.log(people)
// people.shift()
// console.log(people)

// function consecutivePairSum(arr,n,k){
//     let count = 0 ;
//     for( let i = 0 ;i< n-1;i++){
//         if(arr[i]+arr[i+1] == k){
//             count++;
//         }
//     }
//     console.log(count)
// }
// consecutivePairSum([1,2,1,2,1],5,3)



// function functionName(parameter1 , parameter2 ){
//     //code
//     console.log(parameter1)
//     console.log(parameter2)
// }

// functionName(1,2)

//pop method returns the element which is being removed
//push method returns the length of the array after the element is added  to the array
// let arra=[1,2,3,4,5,6,8,9]
// console.log(arra.pop(), 'is popped')
// console.log(arra.push(7), 'is length of the array');
// console.log(arra.unshift(10),'is the length of the array after unshifting');
// console.log(arra)
// console.log(arra.shift(),'is the element that is shifted')

// const arr = ['venkat ', 'karthik','yathish' , 'dp', 'bob']
// const newArr = []
// for( let i = 1 ; i<arr.length-1 ; i++ ){
//     newArr.push(arr[i])
// }
// console.log(newArr)
// const anotherArr = arr.slice(1,4);
//slice method slices the given array from the given starting index to ending index 
// and returns an new array


// function slicing(sInd, eInd,arrr ){
//     const newArr = []
//     for( let i = sInd ; i<eInd ; i++ ){
//     newArr.push(arrr[i])
// }
// return newArr
// }
// const newArr=  slicing( 2,4,['venkat ', 'karthik','yathish' , 'dp', 'bob',])
// console.log(newArr)

//write a function to update same array add 2 new values at last indices

// function splicing(arr,count,a,b){
//     arr.splice(2,count,a,b)
//     return arr
// }
// arr =['c','d','e']
// console.log(splicing(arr ,1,'a','b'))

// function swapping(arr){
//     let i = 0
//     let j = arr.length-1;
//     while(i<j){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         i++;
//         j--
//     }
//     return arr

// }
//     const arr= [1,2,3,4,5];
//     console.log(swapping(arr))

// console.log(arr.includes(2))

console.log(sq(4));
function sq(n){
    return n*n;
}