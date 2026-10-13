function alterMatrix(matrix, x){
    let min = Infinity;
    let arr = matrix.flat();
    let remainder = arr[0] %x
    for(let i = 0 ;i< arr.length;i++){
        if(arr[i] % x!== remainder) return -1;
        let count =0;
        for(let j=0;j<arr.length ;j++){
            if(arr[j]< arr[i]) {
                let temp = arr[j]
                while(arr[i]!=temp){
                    temp+=x;
                    count++
                }
            }else if(arr[j]>arr[i]){
                let temp =  arr[j]
                while(temp!=arr[i]){
                    temp-=x;
                    count++
                }
            }
        }
        console.log(count)
        min = Math.min(count , min)
        
    }
    return min;
};
console.log("min operations =>", alterMatrix([[2,4],[6,8]],2));



function alterTheMatrix(matrix, x){
    let arr = matrix.flat()
    arr.sort()
    let median = Math.floor((arr.length)/2)
    res= Infinity;
    for(let j of arr ){
        res = Math.min(res,(j-arr[i])/2   )
    }
    
    return res
}

console.log("min operations =>", alterTheMatrix([[2,4],[6,8]],2));
