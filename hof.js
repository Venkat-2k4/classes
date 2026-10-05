function add(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
function mul(a,b){
    return a*b
}
function operation(a,b, callback){
    return callback(a,b)
}

console.log(operation(10,20,add))
console.log(operation(10,20,sub))
console.log(operation(10,20,mul))

console.log(operation(10,20,(a,b)=> a**b))