let salaries=[2000,3000,4000,5000,6000]
let newsalaries = salaries.map(salary=>{
    let incamt=salary/2;
    return salary + incamt
})              
console.log( "before increment",salaries)
console.log( "after increment",newsalaries)

let gifts=["watch","ring","chocolates","tfgvuybd","tgwf8ydjs","hhdd","hgvhg"]

//now u 
//want ro filter watch and ring

let filteredarr = gifts.filter(gift =>{
    if(gift=="watch" || gift=="ring"){
        return gift
    }
})
console.log(filteredarr)
console.log(gifts)

let num=[2,4,6,8,10]
let sum=num.reduce(function(total,currentvalue){

    return total+currentvalue
},0)

console.log(sum)

let number=[2,4,6,8,10]
let product=num.reduce(function(total,currentvalue){
     mul=total*currentvalue
    return mul
},1)
console.log(product)







































