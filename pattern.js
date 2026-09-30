
function pyramid(n){
    for(let i =1 ;i<=n ;i++){
        let res =""
        for(let j = 0;j<n;j++){
            if(j<n-i){
                res+=" "
            }else{
                res+="* "
            }
        }
        console.log(res)
    }
}
pyramid(5)

console.log(Math.floor(5/2)+1)