// const arr = [1,1,2,3,2,4,2,2,5,6]
// let set = new Set()
// for(let num of arr){
//     set.add(num)
// }
// console.log(set)

// let string = "the eyes";
// function getUnique(str){
//     let res = new Set(string)
//     let ans =""
//     for(let r of res){
//         ans+=r
//     }
//     console.log(ans)
// }
// getUnique(string)

// let strings = ["ven" ,"kat", "venkat","ven"]
// let setString = new Set(strings);
// console.log(setString)


// let result = [setString]
// console.log(result)
// console.log(result.length)

// let samples = (12,32,43,2,12);
// console.log(samples)


const obj ={
    name: "nitesh",
    role:"Dev"
}
const anotherObj= {
    name: "nitesh",
    role:"Dev"
}

let set = new Set();
set.add(obj)
set.add(anotherObj)
console.log(set)