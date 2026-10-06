// function add(a,b){
//     return a+b
// }
// function sub(a,b){
//     return a-b
// }
// function mul(a,b){
//     return a*b
// }
// function operation(a,b, callback){
//     return callback(a,b)
// }

// console.log(operation(10,20,add))
// console.log(operation(10,20,sub))
// console.log(operation(10,20,mul))

// console.log(operation(10,20,(a,b)=> a**b))

// function twoCallbacks(a,b,first,second){
//     let res = first(a,b)
//     let sol = second(a,b)
//     return res+sol
// }

// console.log(twoCallbacks(10,20 ,(a,b)=> a+b,(a,b)=> a-b))

// function child(){
//     return 1
// }

// function parent(){
//     return child;
// }

// console.log(parent())
// const store = parent()


// console.log(store())

// function parent2(){
//     return (a,b)=>(a+b)
// }

// const res = parent2();
// console.log(res(2,3))
//

//closure
// function outer(){
//     let count = 0;

//     return function inner(){
//         count++;
//         return count
//     }

// }

// let iner = outer()

// console.log(outer()())
// console.log(iner())
// console.log(iner())

// const mapping =(array)=>{
//     let arr =[];
//     for(let i of array){
//         arr.push(i+i)
//     }

//     return arr
// }

// console.log(mapping([1,2,3,4,5])) 
//

const users = [{name : "gin" },{name:"zura"},{name:"shin"}]

const res =users.map((val,index)=>{
    val.age = index;
    return val
} )
 console.log(res)

 function customMap(arr , callback){
    const rearr = new Array(arr.length).fill(undefined)
    for(let i = 0;i<arr.length ; i++){
        rearr[i] = callback(arr[i])
    }
    return rearr
 }

 console.log(customMap([1,2,3,4,5] , (i)=>i+i))

 function customFilter(arr , callback){
    const res = new Array
    for(let i =0;i<arr.length;i++){
        if(callback(arr[i])) res.push(arr[i])
    }
    return res  
}

console.log(customFilter([1,2,3,4,5,6],(i)=>i%2==0))

const emp = [
    {name : "ven" , pay:80000},
    {name : "gin", pay:60000},
    {name : "zura" , pay:40000},

]

console.log(emp.filter((val)=>
    val.pay >50000
).map((v)=>{v.pay =v.pay-20000 
    return v
}))

