/* through this templete sting method i can make a sentence by using the information from the object */

const country = {
    name : 'BD',
    people : 200000,
    capital : 'dhaka',
}

/* my country name is BD and the total peopl is 200000. and the capita is Dhaka. i can make the sentence with the concatenate and use the information from object*/
const sentnce = 'my country name is ' + country.name + ' .and the total peopl is ' + country.people + 'vand the capita is Dhaka ' + country.capital
console.log(sentence)

/* we can write it in a easy way through tempelate syntex */
const sentence = `my country name is ${country.name}. and the total people is ${country.people}. and the capita is Dhaka ${country.capital}`
console.log(sentence)


/* i can do it directly in the colsole log as well */
console.log(
    `my country name is ${country.name}. and the total people is ${country.people}. and the capita is Dhaka ${country.capital}`
)

