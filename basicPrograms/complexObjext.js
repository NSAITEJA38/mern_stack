//complex object
let student={
    sno:1,
    sname:'teja',
    marks:[10,24,45],
    Address:{
        city:'nlg',
        pincode:5000
    },
    getData:function(){
        console.log("hello")
    },
    getAverage:function(){
        let s=0;
        for(let i of this.marks){
            s+=i;
        }
        // console.log("Average Marks:",s/this.marks.length)
        return s/this.marks.length
    }
}
console.log(student.getAverage())
// student.getAverage()
