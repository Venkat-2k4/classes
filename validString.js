

function validString(string ){
    if(string.startsWith("a")){
        for(let i=0;i<string.length ;i++){
            if(string[i] == 'a'){
                if(string[i+1]=="a" || string[i+1]== undefined){
                    continue
                }else if(string[i+1] == 'b'&& string[i+2] == 'b' ){
                    i+=3;
                    continue
                }else {
                    return "NO"
                }
            }else if(string[i]=="b"&&string[i+1] == 'b'){
                if(string[i+2] == "a" || string[i+1]== undefined){

                    continue;
                }else{

                    return "NO"
                }
            }
            
        }
    }else{
        return "NO"
    }
    return "YES"
    
} 

console.log(validString("abbabbabbabbabbaaaaaaaaaaaaaabbaabb"))