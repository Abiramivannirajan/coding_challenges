function anagram (a:string,b:string):any{
    var x=a.length;
    var y=b.length;
    if(x!=y){
        return false;
    }
    var s=a.toLowerCase().split("").sort().join("")
    var n=b.toLowerCase().split("").sort().join("")

    if(s==n){
        return true;
    }else
       {
        return false;
       }
    
}


console.log(anagram("Listen","Silent"));
console.log(anagram("abirami","vidhya"));