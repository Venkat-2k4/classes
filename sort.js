//sort compares elements based on ascii char codes 
// const numbers = [1,72,97,675,8,4235,4236,3]
// numbers.sort((a,b)=>a-b)
// console.log(numbers)
// numbers.sort((a,b)=>b-a)
// console.log(numbers)

// const alphabets = ["apple","Venkat","giraffe" ,"famous","Yelp"]
// alphabets.sort() //[ 'Venkat', 'Yelp', 'apple', 'famous', 'giraffe' ]
// console.log(alphabets)
// alphabets.sort((a,b)=>b-a)
// console.log(alphabets)

// const random="riufhtojfohtrusdtjrgtxhncuvy"
// console.log(random.split("").sort().join(""))

// //LOCALECOMAPRE
// const alphabets = ["apple","Venkat","giraffe" ,"famous","Yelp"]

// alphabets.sort((a,b)=> a.localeCompare(b))
// console.log(alphabets)

const words = [
    {
        name:"venkat",
        rank:224
    },
    {
        name:"karthik",
        rank:22
    },
    {
        name:"yathish",
        rank:143
    },
]
words.sort((a,b)=> b.rank - a.rank);
console.log(words)
words.sort((a,b)=> a.name.localeCompare(b.name));
console.log(words)

var obj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};

function findpath(obj,string){
    const str = string.split(".");

    for(let path of str){
        
    }
}