//Advanced operartions on  array
// arrow functions are used when funtions contain only single line of code.
//1.Filter(only used for selection purpose)
let marks=[90,34,54,75,34,56]
//get all marks less than 50
let Result1=marks.filter(function(element){
    return element>70
})
let Result2=marks.filter((element)=>element>70)//arrow function same as callback function
console.log(Result2)
//write a function that can extract marks greater than 70 , pack them into an array and return it(general function)
let array=[];
function extractElements(marks){
    for(let i of marks){
        if(i > 70){
            array.push(i)
        }
    }
}
extractElements(marks)
console.log(array)
//find all marks b/w 30 and 90
let Result3=marks.filter(function(element){
    return element>30 && element<90;
})
let Result4=marks.filter((element)=>(element>30)&&(element<90))
console.log(Result3)
console.log(Result4)
//2.map(transform or modify)
let salaries=[100,200,300]
let Result5=salaries.map(function(element){//callback function
    return element+50
})
console.log(Result5)
let Result6=salaries.map((element)=>(element+50)) // arrow function
console.log(Result6)
let Result7=salaries.filter((element)=>element+50)//using filter function for  updation
console.log(Result7)
let Result8=marks.map(element=>element>70)
console.log(Result8)
//3.reduce(aggregations)
//find sum of marks
let Result9=marks.reduce((accumator,element)=>accumator+element)
console.log(Result9)
let Result10=marks.reduce((acc,ele)=>acc<ele?acc:ele)
console.log(Result10)
let small=marks[0]
function findSmall(marks){
    for(let i of marks){
        if(i<small){
            small=i;
        }
    }
    return small
}
small=findSmall(marks)
console.log(small)

//4.find
//used to find elements 
let Result11=marks.find(ele=>ele===314)
console.log(Result11)
//5.findindex
//used for finding the index of given element
let Result12=marks.findIndex(ele=>ele===34)
console.log(Result12)