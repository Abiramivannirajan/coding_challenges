//Input a string of alphabets. Find out the number of occurrence of all alphabets in that string. Find out the alphabet with maximum occurrence.
  
function countAlphabets(input: string){
        const counts: {[key: string]:number} = {};
        
        for(const char of input.toLowerCase()){
            if (char >= 'a' && char <= 'z') {
                counts[char] = (counts[char] || 0) + 1;
            }
    }

    let maxChar ='a';
    let maxCount = 0;                                            
    
        for(const char in counts){
            if (counts[char] > maxCount) {
                maxCount = counts[char];
                maxChar = char;
         }
        }
    
        return{counts, max:{ char: maxChar,count: maxCount }};
    }
    
    const inputString = "abirrammi";
    const result = countAlphabets(inputString);
    
    console.log("Alphabet occur:", result.counts);
    console.log("Maximum occur:", result.max);
              



   