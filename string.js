/* if iwant to compare to string - then i need to make both of these into loweer case */

const x = 'hello'
const y = 'HellO'

if(x.toLowerCase() === y.toLowerCase()){
    console.log('it is same')
}else{
    console.log('it is not same')
}

/* need to find somethig thorugh using includs in string */
const word1 = 'i love you'
const word2 = 'I Love yOu'
console.log(word1.toLowerCase().includes(word2.toLowerCase()))

/* use of trim */
/* we will use it to remove the unwanted space at the beginning and at the end in the string */

const string1 = 'I love you'
const string2  ='i love you  '

if(string1.trim().toLowerCase() === string2.trim().toLowerCase()){
    console.log('they are same')
}else{
    console.log('they are not same')
}