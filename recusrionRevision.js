// // function isPanagram(str){
//     //     if(str.length <26)return false;
//     //     let map = new Map();
//     //     let set = new Set()
//     //     // for(let i of str){
//         //     //     map.set(i,(map.get(i) ||0 )+1 );
//         //     // }
//         //     for(let i of str){
//             //         set.add(i)
//             //     }
//             //     for(let i = "a".charCodeAt(0) ;i< "z".charCodeAt(0) ;i++){
//                 //         if(!set.has(String.fromCharCode(i))){
//                     //             return false
//                     //         }
//                     //     }
//                     //     return true
//                     // }
                    
//                     const str = "abcdefghinubyobooYVTDC.,.7%#$@klmnopqrstuvwxyz"
//                     function isPanagram(str){
//                         if(str.length<26) return  false;
//                         const set  = new Set();
                        
//                         for(let char of str){
//                             char = char.toLowerCase();
//                             if(char.charCodeAt(0)  >=97 && char.charCodeAt(0) <=122){
//                                 set.add(char)
//                             }
//     }
    
//     if(set.size ===26) return true;
    
//     return false
// }
// console.log(isPanagram(str))

// function printNum(n){
//     if(n==0) return
    
    
//     printNum(n-1)
//     console.log(n);
// }
// printNum(5)

// function factorialRec(n){
//     if(n==0) return 1

//     return n* factorialRec(n-1)
// }
// console.log(factorialRec(5))

// function isPrime(n,d=2){
//     if(n==d) return true
    
//     if(n%d ==0) return false 

//     return isPrime(n,d+1)
// }
// console.log(isPrime(7))

// function primeRange(start,end){
//     if(start>end ) return 

//     if(isPrime(start)) console.log(start)

//     primeRange(start+1,end)
// }
// primeRange(2,20)

// function printtillN(N) {
//   // Write your code here
//   if(N==1)return "1" 


//   return N+" "+ printtillN(N-1)
// }

// console.log(printtillN(5))


// function fibanacii(n){
//     if(n<=1) return n

//     return fibanacii(n-1)+fibanacii(n-2)
// }

// console.log(fibanacii(8))

// function power(x, y) {
//  // Write your code here
//   if(y ===0) return 1
//   half = power(x,Math.floor(y/2))

//   if(y%2==0){
//     return half * half 
//   }else{
//     return x * half * half 
//   }
// }

// console.log(power(2,4))

console.log(Math.floor(3/2))