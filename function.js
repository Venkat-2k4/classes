// // console.log(firstname)
// // var firstname = ' venkat';
// // console.log(firstname)
// //hoisting : moving the decleration to the top of its scope



// // function displayName(){
// //     var role ="Intructor"
// //     console.log(role)
// //     if(true){
// //         var email = 'venky@gmail.com'
// //     }
// //     console.log(email)
    
// // }

// // displayName()

// for (let i=0; i<9;i++){
//     console.log(i)}

// for(let i=0;i<=10;i++){
//     if (i==8){
//         continue;}
//         console.log(i)
// }
/* 
// Variables:- its a container which stores the data
its as 3 types:-
var :- var can be redeclared and var can be re-assign
let :- let cannot be redeclared but re assigned
const :- const cannot be redeclared or cannot be re-assigned

a =12  // bt default var
console.log(a)
var a=45
var a=78  // redeclaration 
console.log(a)
var a=45
 a=78   // re assign
console.log(a)
const a =23
 a=78
console.log(a)
*/  

/*  
check the number is even or odd
check the number ispositive or negative or zero
checkthe age of the user
 below 11 print child
 above 12 and below 19 print teen age
 above 20 and below 45 print young
 above 46 print older

// */
// const num  = 3;
// if(num %2 ==0){
//     console.log(`the number ${num} is even`)
// }else{
//     console.log(`the number ${num} is odd`)
// }



// const num1 = 3 ;
// if(num1  < 0){
//     console.log(`the number ${num1} is negative`)
// }else if(num1 > 0 ){
//     console.log(`the number ${num1} is positive`)
// }else{
//     console.log(`the number ${num1} is 0`)
// }

// const age = 20;

// if(age < 11){
//     console.log("the user is a child")
// } else if (age < 11 && age > 19){
//     console.log("the user is a teen");
// }else if(age >19 && age < 45){
//     console.log("the user is a adult")
// }else{
//     console.log("the user is older than 45")
// }


// print 1 to n values
// print n to 1 values
// print  odd

//EXECUTION CONTEXT
//var is moved to memory allocation phase where as let and const are moved to temporal deadzone.
//in memory allocation phase the value is retrieved from memory allocation phase

// console.log(firstname)

// var firstname = "ven"
// console.log(firstname)

//functions classes can also be hoisted

// const role = 'dev'
// function explore(){
//     console.log(name)
//     var name = 'ven'
//     console.log(role)
// }
// explore()


// function isPrime(n){
//     for(let i = 2 ;i< n ;i++){
//         if(n%i == 0){
//             return false;
//         }
//     }
//     return true
// }

// for(let i = 1 ; i<10 ; i++){
//     console.log(`the number ${i} is prime ${isPrime(i)}`)
// }

// function isEven(n){
//     if(n%2==0){
//         console.log(`the number ${n} is an even number`)
//     }else{
//         console.log(`the number ${n} is an odd number`)
//     }
// }
// isEven(6)

// function printEven(n){
//     for(let i= 0; i<n; i++){
//         if(i%2==0){
//             console.log(`the number ${i} is an even number`)
//         }
//     }
// }
// printEven(10)

// function power(num , p){
//     let res =1
//     for(let i =0 ; i<p;i++){
//         res *=num
//     }
//     console.log(res)
// }
// power(3,4)


// const ran = 'dy arton'
// hoist()

// function hoist(){
//     console.log(ran)
// }
// function findSumOfCubes(number){
//     let res = 0;
    
//     while(number >0 ){
//         let remainder = number %10;
//         number = Math.floor(number/10);
//         res+= Math.pow(remainder,3);
        

//     }
//     console.log(res)
    
// }
// findSumOfCubes(123)

// function 