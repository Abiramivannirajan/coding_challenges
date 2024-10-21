function minLen(str:string):number{
    var result=str;
    while(result.includes("AB")||result.includes("CD"))
    {
        result=result.replace("AB","").replace("CD","")
    }
    return result.length
}
console.log(minLen("ABFCACDB"))



