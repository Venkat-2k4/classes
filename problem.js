// var containsNearbyDuplicate = function (nums, k) {
//     const map = new Map();
//     let dis = 0
//     for (let i = 0; i < nums.length; i++) {
//         if (map.has(nums[i])) {
//             if (dis == 0) {
//                 dis = Math.abs(map.get(nums[i]) - i)
//             } else {
//                 dis = Math.min(dis, Math.abs(map.get(nums[i]) - i))

//             }
//             map.set(nums[i], i)

//         } else {
//             map.set(nums[i], i)
//         }
//     }
//     console.log(dis)
//     if (dis <= k && nums.length >1 && dis!=0) {
//         return true
//     } else {
//         return false
//     }
// };
// let nums = [1,2]
// let  k = 2
// console.log(containsNearbyDuplicate(nums , k))


// Find the elements that are present in both arrays.

// **Input:** `[1, 2, 3], [2, 3, 4]`
// **Output:** `[2, 3]`

// function intersection(arr ,arr2){
    
// }
// function fibonacci(n){
//     let f = 0;
//     let f1 = 1;
//     let res = [f,f1]
//     let sum=0
//     for(let i=0;i< n-2 ;i++){
//         sum = res[i] +res[i+1];
//         res.push(sum)
        
      
//     }
//     console.log(res)
// }
// fibonacci(6)

// console.log(6&1)

// function removeDuplicates(arr){
//     return [... new Set(arr)]
// }
// console.log(removeDuplicates([1,2,3,4,4,45,5,6,6,6,6,7]))



//Find the element that occurs most frequently in an array.

// **Input:** `[1, 2, 2, 3, 3, 3, 4]`
// **Output:** `3`

// function mostFrequentElement(arr){
//     const map = new Map()
//     for(let i=0;i<arr.length ;i++){
//         if(map.has(arr[i])){
//             map.set(arr[i] , map.get(arr[i]) +1)
//         }else{
//             map.set(arr[i] ,1)

//         }
//     }
//     let highest = -Infinity
//     let keys
//     for(let [key,value] of map){
//         if(highest< value){
//             highest = value;
//             keys=key

//         }
//     }
//     return [keys , highest]
// }

// console.log(mostFrequentElement([1, 2, 2, 3, 3, 3, 4]))
//O(N)^2

// function intersection(arr, arr1){
//     let res = [];
//     for(let i =0;i<arr.length ;i++){
//         for(let j =0;j<arr1.length ;j++){
//             if(arr[i] == arr1[j]){
//                 res.push(arr[i]);
//             }
//     }
// }
//     return res;
// }
// console.log(intersection([1, 2, 3], [2, 3, 4]))

//O(N)

// function intersection(arr1 ,arr2){
//     let set = new Set(arr1);
//     let res = [];
//     for(let i=0;i<arr2.length ; i++){
//         if(set.has(arr2[i])){
//             res.push(arr2[i])
//         }
//     }
//     return res 
// }

// console.log(intersection([1, 2, 3], [2, 3, 4]))


// ### 5. Find Union of Two Arrays

// Combine two arrays and remove duplicate elements.

// **Input:** `[1, 2, 3], [3, 4, 5]`
// **Output:** `[1, 2, 3, 4, 5]`

// function union(arr1 ,arr2){
//     let set = new Set(arr1);
//     for(let i=0;i<arr2.length;i++){
//         set.add(arr2[i])
//     }
//     return [...set]
// }
// console.log(union([1, 2, 3], [3, 4, 5]))


// function differnece(arr1 ,arr2){
//     let set1 = new Set(arr1);
//     let set2= new Set(arr2);
//     let res = []
//     for(let s of set1 ){
//         if(!set2.has(s) ){
//             res.push(s)
//         }
//     }
//     for(let s of set2 ){
//         if(!set1.has(s) ){
//             res.push(s)
//         }
//     }
//     return res 
// }

// console.log(differnece([1, 2, 3], [2, 3, 4]))

// function differnece(arr1,arr2){
//     let set = new  Set(arr1);
//     for(let a of arr2){
//         if(set.has(a)){
//             set.delete(a);
//         }else{
//             set.add(a);
//         }
//     }
//     return [...set];
// }
// console.log(differnece([1, 2, 3], [2, 3, 4]))

// ### 7. Reverse Words in a String

// Reverse the order of words in a given string.

// **Input:** `"Hello World"`
// **Output:** `"World Hello"`

// function reverseWords(string){
//     return string.split(" ").reverse().join(" ")
// }
// console.log(reverseWords("Hello world"))


// ### 8. Find the Longest Word in a String

// Find the longest word from a given sentence.

// **Input:** `"I love programming"`
// **Output:** `"programming"`

// function longestWord(string){
//     let arr = string.split(" ")
//     let longest = "";
//     for(let i of arr){
//         if(longest.length < i.length){
//             longest = i;
//         }
//     }
//     return longest;
// }
// console.log(longestWord("I love programming"))



// ### 10. Check if Two Strings are Anagrams
// Check whether two strings contain the same characters with the same frequency.
// **Input:** `"listen", "silent"`
// **Output:** `true`

// function isAnagram(string1 , string2){
//     if(string1.length != string2.length){
//         return false 
//     }
//     let map = new Map();
//     for(let i =0;i<string1.length;i++){
//         if(map.has(string1[i])){
//             map.set(string1[i] ,map.get(string1[i]) +1  )
//         }else{
//             map.set(string1[i] ,1)
//         }
//     }
//     for(let i =0;i<string2.length;i++){
//         if(map.has(string2[i])){
//             map.set(string2[i] ,map.get(string2[i]) -1  )
//         }
//     }
//     for(let [i,j] of map){
//     if(j!=0){
//         return false
//     }else{
//         return true
//     }
// }
    

// }
// console.log(isAnagram("listen", "sufore"))

// ### 11. Sort an Array Without Using `.sort()`

// Sort an array in ascending order without using the built-in `.sort()` method.

// **Input:** `[5, 3, 8, 1]`
// **Output:** `[1, 3, 5, 8]`


// function sortArr(arr){
//     for(let i=0 ;i<arr.length ;i++){
//         for(let j =i+1 ;j<arr.length ;j++){
//             if(arr[j] <arr[i]   ){
//                 let temp = arr[j];
//                 arr[j] = arr[i];
//                 arr[i] = temp;
//             }
//         }
//     }
//     return arr;

// }
// console.log(sortArr([5, 3, 8, 1]))

// console.log([1, [2, [3, 4]], 5].flat().flat())

// function falten(arr){
//     let res =[];
//     for(let i=0;i<arr.length;i++){
//         if(typeof arr[i] == "number"){
//             res.push(arr[i])
//         }else if(Array.isArray(arr[i])){
//             res.push(...falten(arr[i]))
            
//         }
//     }
//     return res
// }

// console.log(falten([1, [2, [3, 4]], 5]))

// ### 13. Remove Falsy Values from an Array

// Remove all falsy values from an array.

// **Input:** `[0, 1, false, 2, "", 3, null]`
// **Output:** `[1, 2, 3]`

// function removeFalsy(arr){
//     let res =[];
//     for( let i=0;i<arr.length ;i++){
//         if(arr[i] ){
//             res.push(arr[i]);
//         }
//     }
//     return res
// }

// console.log(removeFalsy([0, 1, false, 2, "", 3, null]))


// Group objects based on the value of a specific property.

// **Input:** An array of objects containing `name` and `role`.

// **Output:** Objects grouped separately based on their `role`.
// const employees = [
//   { name: "Alice", role: "Developer" },
//   { name: "Bob", role: "Manager" },
//   { name: "Charlie", role: "Developer" },
//   { name: "David", role: "Tester" },
//   { name: "Eve", role: "Manager" }
// ]
//;{
//   Developer: [
//     { name: "Alice", role: "Developer" },
//     { name: "Charlie", role: "Developer" }
//   ],
//   Manager: [
//     { name: "Bob", role: "Manager" },
//     { name: "Eve", role: "Manager" }
//   ],
//   Tester: [
//     { name: "David", role: "Tester" }
//   ]
// }
// const employees = [
//   { name: "Alice", role: "Developer" },
//   { name: "Bob", role: "Manager" },
//   { name: "Charlie", role: "Developer" },
//   { name: "David", role: "Tester" },
//   { name: "Eve", role: "Manager" }
// ]
// function objectGrouping(employees){
//     const obj = Object.groupBy(employees , (emp) => emp.role );
//     return obj;
// }
// console.log(objectGrouping(employees))

// ### 15. Convert String into Title Case

// Convert the first letter of every word to uppercase.

// **Input:** `"hello world"`
// **Output:** `"Hello World"`

// function titleCase(str ){
//     let array = str.split(' ');
//     for (let index = 0; index < array.length; index++) {
//         array[index] = array[index].charAt(0).toUpperCase()+array[index].slice(1)

//     }
//     return array.join(" ")
// }
// console.log(titleCase("hello world"))

// ### 16. Reverse Only Vowels in a String

// Reverse only the vowels in the given string while keeping consonants in their original positions.

// **Input:** `"hello"`
// **Output:** `"holle"`

// function rverseVowels(str){
//     let arr =str.split("")
//     let set = new Set(["a" , "e","i","o","u"])
//     let preVowel =0;

//     for(let i=0;i<arr.length ;i++){
//         if(set.has(arr[i])){
//             if(preVowel ==0){
//                 preVowel = i
//             }else{
//                 let temp = arr[i];
//                 arr[i] = arr[preVowel];
//                 arr[preVowel] = temp
//                 preVowel = i;  
//             }
//         }
//     }
//     return arr.join("")
// }
// console.log(rverseVowels("hello"))

// ### 17. Maximum Sum Subarray

// Find the contiguous subarray with the maximum possible sum.

// **Input:** `[-2, 1, -3, 4, -1, 2, 1, -5, 4]`
// **Output:** `6`

// function maxSum(arr){
//     let maxsum = -Infinity;
//     for(let i =0;i<arr.length;i++){
//         let sum =0;
//         for(let j =i ;j<arr.length;j++ ){
//             sum+=arr[j];
//             maxsum = Math.max(sum ,maxsum);
//         }
//     }
//     return maxsum
// }

// console.log(maxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

// function maxSum(arr){
//     let maxsum = arr[0];
//     sum = 0;
//     for(let num of arr){
//         sum +=num;
//         maxsum =Math.max(sum ,maxsum);
//         if(sum <0){
//             sum=0;
//         }
//     }
//     return maxsum;
    
// }
// console.log(maxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

// ### 18. Find All Pairs with Sum K

// Find all pairs of numbers whose sum is equal to K.

// **Input:** `[1, 2, 3, 4, 5], k = 6`
// **Output:** `[[1, 5], [2, 4]]`

// function  findPairs(arr , k){
//     let res = []
//     for(let i=0;i<arr.length-1;i++){
//         for(let j= i+1 ;j<arr.length ;j++){
//             if( arr[i] +arr[j] == k){
//                 res.push([arr[i] ,arr[j]])
//             }
//         }
//     }
//     return res
// }
// console.log(findPairs([1, 2, 3, 4, 5],6))

//++++++++++++ questions+++++++++++++++++
// const arr = [
//   ["name", "John"],
//   ["age", 25],
//   ["city", "Delhi"]
// ];

// Output:

// {
//   name: "John",
//   age: 25,
//   city: "Delhi"
// }


// function arrayToObject(arr){
//     let obj ={};
//     for(let i=0 ;i<arr.length ;i++){
//         obj[arr[i][0] ]= arr[i][1]
//     }
//     return obj
// }
// console.log(arrayToObject(arr))

// console.log(arr[0][1])

// .Given an object where each property contains another object, flatten it into a single object.
// Input:-                        -> 11.51 - 12.12   Solved   => 10

// Output:-

// {
    //   name: "John",
//   age: 25,
//   city: "Hyderabad",
//   country: "India"
// }
// let obj ={
//   user: {
//     name: "John",
//     age: 25
//   },
//   address: {
//     city: "Hyderabad",
//     country: "India"
//   }
// }
// function flats(){
//     let res ={}
//     Object.assign(res,{role:"developer"})
//     for(let value of Object.values(obj)){
//         Object.assign(res, value);
//     }
//     console.log(res)
// }
// flats(obj)

// Create an array of employee objects with name, age, and dep properties, and group the employees based on their age.
                                                                   
// Input:-


// Output:-
// {
//   22: [
//     { name: "Shubham", age: 22, dep: "IT" },
//     { name: "Amit", age: 22, dep: "Finance" }
//   ],
//   23: [
//     { name: "Neha", age: 23, dep: "HR" }
//   ],
//   24: [
//     { name: "Rahul", age: 24, dep: "HR" },
//     { name: "Priya", age: 24, dep: "IT" }
//   ]
// }
// const employees = [
//   { name: "Shubham", age: 22, dep: "IT" },
//   { name: "Rahul", age: 24, dep: "HR" },
//   { name: "Amit", age: 22, dep: "Finance" },
//   { name: "Priya", age: 24, dep: "IT" },
//   { name: "Neha", age: 23, dep: "HR" }
// ];

// let obj =Object.groupBy(employees,(item)=>item.age)
// console.log(obj)

// Given two strings, write a program to check whether they are anagrams of each other using an Object (frequency counter).

// Example:

// Input: "listen", "silent"
// Output: true

// Example:

// Input: "hello", "world"
// Output: false

// function isAnagram(str1 , str2){
//     let res ={}
//     let res2 ={}
//     if(str1.length != str2.length) return false
//     for(let i =0 ;i<str1.length;i++){
//         if(res.hasOwnProperty(str1[i])){
//             res[str1[i]]++;
//         }else{
//             res[str1[i]] = 1;
//         }
//     }
//     for(let i =0 ;i<str2.length;i++){
//         if(res2.hasOwnProperty(str2[i])){
//             res2[str2[i]]++;
//         }else{
//             res2[str2[i]] = 1;
//         }
//     }
//     for(let [key,value] of Object.entries(res)){
//         if(res2.hasOwnProperty(key) && res2[key] ==value){
//             continue
//         }else{
//             return false
//         }
//     }
//     return true    
// }
// console.log(isAnagram("theeyes","theysee"))

// console.log(Math.floor(5/2))

const mat = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11]
    [12,13,14],
]

// for(let i=0;i<5;i++){
//     process.stdout.write(" ")
//     for(let j= 0;j<5;j++){
//         if(j<i){
//             process.stdout.write(" ")
//         }else{
//             process.stdout.write("*")

//         }
//     }
//     console.log("")
// }


// function lower(n){
// for(let i=0;i<n;i++){
//     let str = ""
//     for(let j= 0;j<n;j++){
//         if(j<i){
//             str+=" "
//         }else{
//             str+="* "

//         }
//     }
//     console.log(str)
   
// }
// }

// function uppper(n){
// for(let i=0;i<n;i++){
//     let str = ""
//     for(let j= 0;j<n;j++){
//         if(j<n-i){
//             str+=" "
//         }else{
//             str+="* "

//         }
//     }
//     console.log(str)
   
// }
// }
// uppper(5)
// lower(5)

// const arr =[
//     [1, 2, 3, 4],
//     [5, 6 ,7 ,8],
//     [9, 10, 11 ,12],
//     [13,14,15,16]]

// function spiralTraversal(arr){
//     let direction = "right"
//     let row =0;
//     let col=0;
// for(let i =0 ; i< arr.length ;i++){

//     if(direction == "right"){
//         for(let j =0 ;j<arr[row].length;j++){
//             console.log(arr[row][j])
//         }
//         col = arr[i].length-1;
//         row = i+1;
//         direction = "down"
//     }else if(direction=="down"){
//         for(row ; row <arr.length ;row++){
//             console.log(arr[row][col])
//         }
//         row = arr.length-1;
//         col = arr[i].length-2;
//         direction = "left"
//     }else if(direction =="left"){
//         for(col;col>=0;col--){
//             console.log(arr[row][col])
//         }
//         row-=1;
//         col= 
//     }


// }
// }
// spiralTraversal(arr)

