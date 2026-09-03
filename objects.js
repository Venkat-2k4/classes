
// const jsonFormat= JSON.stringify(acciojobs)
// console.log(jsonFormat)

// console.log(typeof jsonFormat)
// const parsed = JSON.parse(jsonFormat)
// console.log(typeof parsed)
// console.log(parsed)

// console.log(acciojobs.address.area)

// if(acciojobs.hasOwnProperty("address")){
//     console.log("property exists")
// }else{
//     console.log("property doesnt exist ")
// }

const user = {
    name:"ven",
    age:"22",
    role:"dev"
}

const {name:firstname} = user;
console.log(firstname);

const acciojobs ={
    name : "accio",
    location :"Hyderabad",
    address:{
        area:"gachibowli",
        pinocde:500085
    },
    batches :13
} 

const copy = {...acciojobs};


copy.name ="other institute";
console.log(copy)
console.log(acciojobs)

console.log(copy["address"]["area"])