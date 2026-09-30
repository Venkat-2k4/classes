function sort(arr){
    let map={}
    for(let num of arr){
        map[num]=(map[num]||0)+1
    }
    arr.sort((a,b)=>{
        let fre1=map[a]
        let fre2=map[b]
        if(fre1!=fre2){
            return fre1-fre2
        }else{
            b-a
        }
})
    return arr
}
console.log(sort([1,1,2,2,2,3]))
