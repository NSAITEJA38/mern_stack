let student=[
    {sno:1,name:'ravi',age:21},
    {sno:2,name:'vikas',age:19},
    {sno:3,name:'manoj',age:15},
    {sno:4,name:'madhu',age:30},
]
//find students age less than 20
let Result1=student.filter(stuObj=>stuObj.age<20)
console.log(Result1)
//increment age by 2 for manoj
let Result2=student.map(stuObj=>{
    if(stuObj.name==='manoj'){
        stuObj.age+=2
    }
    return stuObj
})
console.log(Result2)
//find the sum of ages of all the students
let Result3=student.reduce((acc,stuObj)=>acc+stuObj.age,0)
console.log(Result3)