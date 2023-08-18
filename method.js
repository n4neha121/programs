let  students = [{id:1,name:"neha"},{id:2,name:"khushbu"},{id:3,name:"raj"}]
let result= students.find(student =>{
    return student.id === 1
})
console.log(result)

let ages=[21,22,30,33,50]

let result1=ages.findIndex(age =>{
    return age>25;
})
console.log("Index of required age =",result1)

let scores =[22,25,45,70,66,54]
let res=scores.some(score=>{
    return score >50
})
console.log(res)

let scores2 =[22,25,45,70,66,54]
let res2=scores2.every(score1=>{
    return score1 >50
})
console.log(res2)