const country = {
    name : 'BD',
    people : 200000,
    "nice places" : ['dhaka', 'rajshahi', 'comilla'],
    capital : {
        south : 'dhaka',
        north : 'khulna',
        east : 'barishal'
    },
    isNice : true
}
const propertyName = country.people;
const places = country['nice places']
country.name = 'CT'
country['nice places'] = ['chandpur']
const one = country['nice places'[0]]
country.location = 'south'

country.capital.south = 'chandpur'
console.log(country)



/* const keys = Object.keys(country);
const values = Object.values(country)
// console.log(values)

for(let propertyName in country){
    // const value = country[propertyName]
}

for(let i  = 0; i <keys.length; i++){
    const propertyName = keys[i];
    const propertyValue = country[propertyName]
    console.log(propertyName, propertyValue)

} */

const keys = Object.keys(country);
const values = Object.values(country)
for(let i = 0; i< keys.length; i++){
    const propertyName = keys[i]
    const propertyValues = country[propertyName]
}

for(let i in country){
    const propertyValues = country[i];
    // console.log(i, ':', propertyValues)

}

