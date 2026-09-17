// let string = "venkat"
// //string[0] = "Y" // its not possible instead do this ;
// string = string.split("");
// string[0] = "Y";
// string = string.join("")

// console.log(string)//Yenkat

// console.log(string.includes("Y"));
// function noVowels(string){
//     const vowels = ['a','e','i','o','u'];
//     string= string.toLowerCase();
//     let res = ""
//     for(let i = 0 ; i<string.length;i++){
//         if(vowels.includes(string[i])){
//             continue
//         }
//         res+=string[i];


//     }
//     return res;
// }


// console.log(noVowels("VENKAT"));

// //  \n is used to make the rest of the string to appear in the next line.
// // \T is used to 
// const words ="Venkat\tYathish\nDp\tPraveen";
// console.log(words)

// function scoreInPercentage(marks , total){
//     return `the student has scored ${(marks/total)*100} % in the test`
// }
// console.log(scoreInPercentage(89,100))

// function vowelsInString(string){
//     let vowels = ['a','e','i','o','u'];
//     let vow = []
//     for(let i = 0;i<string.length;i++){
//         if(vowels.includes(string[i]) ){
//             vow.push(i)
//         }
//     }
//     console.log(vow)

// }
// vowelsInString("Im venkat manikanta")

// const str ="d";
// const upperCase = str.charCodeAt(0) -32 ;
// console.log(String.fromCharCode(upperCase))

// for(let i = 65;i<65+26 ;i++){
//     console.log(`ASCII code ${i} is ${String.fromCharCode(i)}`)
// }

// FROMCHARCODE and CHARCODEAT 

// function isUpperCase(string){
//     if(string.charCodeAt(0) <91){
//         return true
//     }
//     return false
// }
// // console.log(isUpperCase("Z"))

// function ToUpperCase(string){
//     let res = "";
//     for(let i = 0 ;i< string.length;i++){
        
//         if(isUpperCase(string.charAt(i))){
//             res +=string.charAt(i)
//         }else{
//             res +=String.fromCharCode(string.charCodeAt(i)-32) 
//         }

//     }
//     return res;
// }
// console.log(ToUpperCase("Hello"))
// function customArray(length , fill){
//     const arr = [];
//     for(let i=0;i<length ;i++){
//         arr.push(fill);
//     }
//     return arr;
// }
// console.log(customArray(3000,3));

// const arr = new Array(100).fill(100)
// console.log(arr)

// const ascii =new Array(256).fill(-1);

// str = "abcd"
// function asciiArray(ascii,str){

//     for(let i=0;i<str.length;i++){
//         ascii[str.charCodeAt(i)] =1
//     }
//     return ascii
// }
// console.log(asciiArray(ascii,str));
// const ascii =new Array(256).fill(-1);

// str = "hello"
// function asciiArray(ascii,str){
// let res = ""
//     for(let i=0;i<str.length;i++){
//         if(ascii[str.charCodeAt(i)] ==-1){
//             ascii[str.charCodeAt(i)] =1;
//             res +=str[i];
//         }
//     }
//     return res
// }
// console.log(asciiArray(ascii,str));

//console.log(str[3])


// function longestSubString (string){
//     let i=0;
//     let j=0;
//     let sub = "";
//     let longest="";
//     while(j<string.length && i<j){
//         sub = string.slice(i,j);
//         if(!sub.includes(string[j])){
//             if(longest.length < sub.length+1){
//                 longest = sub
//             }
//             j++;
//         }else{
//             i++;
//         }
        
//     }
//     return longest;
//  }
//  console.log(longestSubString("abacdeafcd"))

// function longestSubString(str){
//     let sub="";
//     let longest ="";
//     for(let i=0;i<str.length ;i++){
//         console.log("i" , i)
//         for(let j=i+1;j<str.length ;j++){
//             console.log("j" , j)
//             if(!sub.includes(str[j])){
//                 sub = str.slice(i,j+1);
//                 console.log(sub)
//             }else if(sub.includes(str[j])){
//                 break;
//             }
//             if(longest.length < sub.length){
//                 longest=sub
//             }
//         }
//     }
//     console.log( longest);
// }
// longestSubString("abacdeafcd")




// function customReplace(string ,target ,newValue){

// }

// const user ={
//     name : "ven",
//     dob : "16/06/2004",
//     number :"838423969"
// }

// console.log(user.name)

// function objects(object , key){
//     console.log(object[key])
// }
// let key = "name"
// objects(user,key)
// delete user[key]
// console.log(user)

const data = [
    {
        name:"Venkat",
        grad:"2021"
    },
    {
        name:"yathish",
        grad:"2026"
    },
    {
        name:"karthik",
        grad:"2022"
    },
]
// function  filters(data,year){
//     const arr = [];
//     for (const da of data) {
//         if(da.gard > year){
//             arr.push(da)
//         }
//     }
//     return arr;
// }
// function  filters(data,year){
    
//     for (const da of data) {
//         if(da.grad > year){
//             da.isValid = true
//         }else{
//             da.isValid = false

//         }
//     }
//     console.log(data);
// }

// function filters(data ,year){

//     for (let i = 0; i < data.length; i++) {       
//         if(data[i].grad >2021){            
//             data.splice(i,1)
//         }else if(data[i].grad >2021){
//             data[i].isValid= true ;
//         }
        
//     }
//     return data;
// }


// console.log(filters(data ,2021  ))


// for (const element of data) {
//     console.log(Object.values(element))
// }
let k=878
k =k%26
console.log(String.fromCharCode("s".charCodeAt(0) +k -26))
console.log("z".charCodeAt(0) +2)

let i=1;
  while(i<s.length){
    if(s[i] =="a"){
      if(!s.startsWith("a" ,i+1) && !s.startsWith("bb",i+1) ){
        console.log(1,i)
        return "NO";
      }
    }else if (s[i]=="b" && s[i+1]=="b"  ){
      if(s[i+2] != "a"&& s[i+2] !==undefined  ){
        console.log(2,i)
        return "NO"
      }
      i++
      
    }
    i++;
  }