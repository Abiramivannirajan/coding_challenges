// write a function to count both vowels and consonents in a string


//input: Nithya   output: vowels=2  consonent=4


function count (str: string){
    var vowels=0
    var letter= str.toLowerCase(); //a
    for (let val of letter){   //a, 
         if(val=='a'|| val=="e"||val=="i"||val=="o"||val=="u")
             vowels++
    
        }
        return vowels 
}
console.log(count("Abirami"));