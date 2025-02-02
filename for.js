const nums = [23, 43, 2, 5, 346, 204, 2]
let sumofeven = 0
let sumofodd = 0
for(let i = 0; i < nums.length; i++){
    if(nums[i] % 2 === 0){   /* here nums[i] it mens i have accessed to the index of array */
        sumofeven = sumofeven + nums[i]
    }else{
        sumofodd += nums[i]
    }
}
console.log(sumofeven)
console.log(sumofodd)