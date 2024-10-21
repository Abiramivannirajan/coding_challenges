function reverse(a:string):string
{
    var s=a.split("");
    var v=s.reverse();
    var t=v.join("");
    return t
}

console.log(reverse("abirami"))


// var input="abirami";
// var rev=input.split("")
// var reverse=rev.reverse();
// var join=reverse.join("");
// console.log(join);