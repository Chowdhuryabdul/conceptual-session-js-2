const numbers = [12, 24, 35, 36 , 28 , 300, 55, 67, 89];
for(let i of numbers){
    if(i % 2 === 0){
        continue   /* it means those er even, skip those */
    }
    console.log(i)
}