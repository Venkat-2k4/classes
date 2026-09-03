// function sumOfArray(nums){
//     let sum = 0;
//     for(let i = 0; i<nums.length ; i++){
//         sum+= nums[i];
//     }
//     return sum;
// }
// const nums=[2,4,6,8]
// console.log(sumOfArray(nums))

// function avg(avgArr){
//     let sum =0;
//     for(let i=0 ;i<avgArr.length;i++){
//         sum+=avgArr[i];

//     }
//     return sum/avgArr.length
// }

// const avgArr=  [10,20,30];
// console.log(avg(avgArr))

// function largestElement(lArr){
//     let max = 0;
//     for( let i = 0;  i<lArr.length;i++){
//         if(max <lArr[i]){
//             max= lArr[i];
//         }
//     }
//     return max;

// }
// const  lArr= [5,8,2,10,3];
// console.log(largestElement(lArr))

// function smallestElement(sArr){
//     let min = sArr[0];
//     for( let i = 0;  i<sArr.length;i++){
//         if(min >sArr[i]){
//             min= sArr[i];
//         }
//     }
//     return min;

// }
// const  sArr= [5,8,2,10,3];
// console.log(smallestElement(sArr))

// function countEvenNumbers(evenArray){
//     let count = 0;
//     for(let i =0;i<evenArray.length;i++){
//         if(evenArray[i]%2 == 0){
//             count++;
//         }
//     }
//     return count;
// }

// const evenArray= [2,5,8,7,10];
// console.log(countEvenNumbers(evenArray))

// function countOddNumbers(oddArray){
//     let count = 0;
//     for(let i =0;i<oddArray.length;i++){
//         if(oddArray[i]%2 != 0){
//             count++;
//         }
//     }
//     return count;
// }

// const oddArray= [2,5,8,7,10];
// console.log(countOddNumbers(oddArray))

// function printEvenNumbers(evenArray){
    
//     for(let i =0;i<evenArray.length;i++){
//         if(evenArray[i]%2 == 0){
//             console.log('even numbers',evenArray[i])
//         }
//     }
    
// }
// printEvenNumbers(evenArray)


// function printOddNumbers(Arr){
    
//     for(let i =0;i<Arr.length;i++){
//         if(Arr[i]%2 != 0){
//             console.log('odd numbers',Arr[i])
//         }
//     }
    
// }
// const Arr = [1,2,3,4,5,6]
// printOddNumbers(Arr);

// function countPosNeg(inpArr){
//     let positiveCount = 0;
//     let negativeCount = 0;
//     for(let i =0 ;i< inpArr.length;i++){
//         if(inpArr[i] >0){
//             positiveCount++;
//         }else{
//             negativeCount++
//         }
//     }
//     console.log('positive count :',positiveCount,'negative count ',negativeCount)
// }
// const inpArr =[-2,5,-1,7,-8]
// countPosNeg(inpArr)

// function searchElemet(searchArr ,target){
//     for( let i = 0 ; i<searchArr.length ;i++){
//         if(searchArr[i] == target){
//             console.log(searchArr[i] ,'is found at pos', i )
//         }   
//     }
// }
// const searchArr = [5,10,15,20];
// const target = 15;
// searchElemet(searchArr,target);

// function countOccuerances(occurArr ,search){
//     let count = 0 ;
//     for(let i = 0; i< occurArr.length ;i++){
//         if(occurArr[i] ==search){
//             count++;        }
//     }
//     return count;
// }
// const occurArr =[1,2,3,2,5,2];
// console.log('occured times',countOccuerances(occurArr , 2));

// function ReversePrint(revaArr){
//     for(let i = revaArr.length; i>=0 ;i--){
//         console.log(revaArr[i]);
//     }
// }
// const revaArr =[1,2,3,4];
// ReversePrint(revaArr)

// function product(productArr){
//     let res = 1 ;
//     for(let i =0 ;i< productArr.length;i++){
//         res*=productArr[i];
//     }
//     return res;

// }
// const productArr = [2,3,4]
// console.log('product of elements in the array' ,product(productArr))

// function evenIndecies(evenIndex){
//     for(let i =0 ;i< evenIndex.length;i++){
//         if(i%2==0){
//             console.log('element at even index', i,' is', evenIndex[i])
//         }
//     }   
// }
// const evenIndex = [10,20,30,40,50];
// evenIndecies(evenIndex)

// function secondLargest(seclarge){
//     let largest = 0; 
//     for(let i = 0 ; i<seclarge.length;i++){
//         if(largest < seclarge[i]){
//             largest  = seclarge[i]
//         }
//     }
//     console.log(largest)
//     let secLar = 0;
//     for(let i = 0 ; i<seclarge.length;i++){
//         if(seclarge[i] > secLar && seclarge[i] < largest ){
//             secLar = seclarge[i] ;
//         }
//     }
//     return secLar;
// }
// const seclarge =  [4,8,1,10,6];
// console.log('secondlargest element in the array is ',secondLargest(seclarge))


// function secondSmallest(smallArr){
//     let smallest = smallArr[0] ;
//     for(let  i = 0; i<smallArr.length;i++){
//         if(smallest > smallArr[i]){
//             smallest = smallArr[i];
//         }
//     }
//     console.log('smallest element' ,smallest)
//     secSmall = smallArr[0];
//     for(let i=0 ; i< smallArr.length;i++){
//         if(smallArr[i] > secSmall && smallArr[i] < smallest ){
//             secSmall = smallArr[i] ;
//         }
//     }
//     console.log('second smallest element is ',secSmall)

// }
// const smallArr= [4,8,1,10,6]
// secondSmallest(smallArr)

// function revArr(orgArr){
//     let i = 0; 
//     let j = orgArr[orgArr.length-1];
//     while(i<j){
//         let temp = orgArr[i];
//         orgArr[i] = orgArr[j];
//         orgArr[j] = temp;
//         i++;
//         j--;
//     }
// }

//strictly increasing or not 
// function increasing(arrr){
//     for(let i =0; i<arrr.length-1;i++){
//         console.log(arrr[i],'first number' ,arrr[i+1],'second number' )
//         if(arrr[i] > arrr[i+1]){
//             console.log("NO")
//             return;
//         }
//     }
//     console.log("YES")
// }
// // const arrr=[2,4,1,3]
// const arrr=[1,2,3,4,5,6]

//  increasing(arrr) //?console.log("yes") : console.log("no") ;


// function minEvenDistance(arr){
//     let j = -1 ;
//     let d = Infinity
//     for(let i=0 ;i< arr.length;i++){
//         if(arr[i]%2==0){

//             if(j!=-1)d= Math.min(d,i-j)
//             j=i;
//         }
//     }
//     return d;
//     if(d == Infinity ) return -1
// }
// const arr = [5,4,3,1,2,7,6]

// console.log(minEvenDistance(arr))
// console.log(9/5)



function thirdLargets(arr){
let maxi=-Infinity,maxi2=-Infinity,maxi3=-Infinity;
for(let i=0;i<arr.length;i++){
  //  if(maxi === arr[i] || maxi2 === arr[i] || maxi3===arr[i]) continue;
    if(maxi<arr[i]){
        maxi3 = maxi2;
        maxi2 = maxi //99
        maxi  = arr[i]//99
    }else if(arr[i]<maxi && arr[i] > maxi2){
        maxi3 = maxi2
        maxi2 = arr[i];
    }else if (arr[i] < maxi2 && arr[i] > maxi3 ){
        maxi3 =arr[i];
    }
}
return [maxi, maxi2 ,maxi3]
}
const arr=[11,22,99,33,44, 55, 66, 77,88,88]
console.log(thirdLargets(arr))


function rev(string){
    let res = string.split("").reverse().join("");
    return res === string
}
console.log(rev("madam"));

