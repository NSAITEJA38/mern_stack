//object (pack of properties)
let empObj={
    empNo:100,
    empName:'teja',
    empAge:21
}
//accessing properties
console.log(empObj.empName)
console.log(empObj.empCity)

//Iterate an object we use for-in loop
for(let i in empObj){
    console.log(i,"is",empObj[i])
}


// create student object with properties rollno,name,age,city
//create product obj with prodName,prodBrand,prodPrice
let stuObj={
    stuName:'teja',
    stuNo:38,
    stuAge:21,
    stuCity:'nlg'
}
let product={
    prodName:'nordce4',
    prodBrand:'1+',
    prodPrice:22000
}

//Immutable
let a=10
a=a+10
console.log(a)



let employee={
    empId:1,
    empName:'teja'
}
console.log(employee.empId)
//adding new property
employee.city='nlg'
console.log(employee.city)
//update new property
employee.empId=101
console.log(employee.empId)

//delete a property
delete employee.empName
console.log(employee.empName)
//freeze an object
Object.freeze(employee)//object is locked cant modified or updated

//read all keys
console.log("keys:",Object.keys(employee))
//read all values
console.log("values:",Object.values(employee))

let test={
    a:10,
    b:20,
    c:30
}
//unpack object(destructuring)
// let {a,b,c}=test;
// console.log(a)
// console.log(b)

