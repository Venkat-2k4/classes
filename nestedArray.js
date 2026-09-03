// const arr = [1,2,3,4,["a","b","c",[5,6]],['z','y','x']];
// console.log(arr[5][0]);

//...spread operator only the elements of the first level.
//if u make a copy of an array with nested arrays , changes in the nested array
//will occured in original array as well'

// const arr = [1,2,3,[4]];
// const arrCopy = [...arr];
// arrCopy[[3][0]] = 10;
// console.log(arrCopy,arrCopy)
//[ 1, 2, 3, 10 ] [ 1, 2, 3, 10 ]
//              |
//              \whats happening in the background
//              |
// const nestedArray = [4];
// const arr = [1,2,3,nestedArray];
// const arrCopy = [...arr];
// arrCopy[[3][0]] = 10;
// console.log(arrCopy,arrCopy,nestedArray)

// const arr1= [1,2,3,[5,6]];
// const copyArr = [...arr1];
// copyArr[3] = 'venkat';//here u are accessing the whole element and instead of going
// // inside the nested array
// console.log(arr1,copyArr);//[ 1, 2, 3, [ 5, 6 ] ] [ 1, 2, 3, 'venkat' ]


// const arr = [1,[2,[3,[4]]]];
// const copy= structuredClone(arr);//used for cloning the higher level nested arrays in array
// copy[1][0] = "venkat";
// console.log(copy[1][1][1])//[ 4 ]
// console.log(arr,copy)//[ 1, [ 2, [ 3, [Array] ] ] ] [ 1, [ 'venkat', [ 3, [Array] ] ] ]

// // to remove the nested arrays(higher level arrays ) use flat method ;
// const flatArr = arr.flat(1);//flat(depth) depth = how many levels u wanna remove
// console.log(flatArr) //[ 1, 2, [ 3, [ 4 ] ] ]
// // use depth = Infinity if u dont know how many nested arrays are there

// console.log(arr.flat(Infinity)) //[ 1, 2, 3, 4 ]

const arr= [1,[2,[3,45]]];
const arr2 = [10 ,[40,[5]]];
function nestedSum(arr,ar2){

    let sum = 0;
    for(let i = 0 ; i< arr[1][1].length ; i++){
        sum+=arr[1][1][i];
    }
    for(let i = 0 ; i< arr2[1][1].length ; i++){
        sum+=arr2[1][1][i];
    }
    return sum
}
console.log(nestedSum(arr,arr2))

// DESTRUCTURING ARRAY
const names = ["ippo" , "miyata", 'sendo' ,"volg"]
const [person1,person2,person3] = names;
console.log(person1,person2,person3) 