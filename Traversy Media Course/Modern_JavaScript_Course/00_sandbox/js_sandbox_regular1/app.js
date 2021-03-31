let re;
// Literal Characters

re = /hello/
re = /hello/i;

// Metacharacter Symbols

re = /^h/i;     //must start with

re = /World$/i;     //must end with

re = /^hello$/i;     //Must begin and end with

re = /^h.llo$/i;     //Matches any ONE character

re = /h*llo/i;     //Matches any character 0 or more times

re = /gre?a?y/i // Optional character

re = /gre?a?y\?/i // Escape character

// Икфслуеі [] = Character shapeOutside: 

re = /gr[ae]y/i ; // Must be an a or e

re = /[^GF]ray/i ; // Mutch anything exept a G or F

re = /[A-Z]ray/ ; // Mutch any uppercase letter

re = /[A-Z]ray/ ; // Mutch any lowerrcase letter

re = /[A-Za-z]ray/ ; // Mutch any lowerrcase letter

re = /[0-9]ray/ ; // Mutch any digit

re = /[0-9]ray/ ; // Mutch any digit

re = /Hel{2}o/i; // Must occur exactly {n} amount times

re = /Hel{2,4}o/i; // Must occur exactly {n betwen n} amount times

re = /Hel{2,}o/i; // Must occur at least {m times}

re = /^([0-9]x){3}$/ //Grouping

re = /\w/; //Word character - alphanumeric or _

re = /\w+/; //+ = one or more

re = /\W/; // Non-Word character

re = /\d/; // Non-Word character

re = /\d/; // Match any digit

re = /\d+/; // Match any digit 0 or more times

re = /\D/; // Match any Non-digit

re = /\s/; // Match whitespace char

re = /\S/; // Match NON-whitespace char

re = /hell\b/i; //Word boundary

re = /x(?=y)/; // Match x only if followed by y 

re = /x(?!y)/; // Match x only if followed by y 


// String to match
const str = 'xcvkv;k;sy';

const result = re.exec(str);

console.log(result)

// Log result

function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`)
  }else {
    console.log(`${str} does NOT mathc ${re.source}`);
  }
}

reTest(re, str)