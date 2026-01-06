//Array
let skills=['html','css','javascript']
//Accessing elements(destructure)
let [a,b,c]=skills
console.log(skills)

// insertion of element in array
// at start
skills.unshift('angular','java')
console.log(skills)
//at end
skills.push('c')
console.log(skills)
//at b/w
skills.splice(2,0,'DSA')
console.log(skills)

//delete element in array

//at start
skills.shift()
console.log(skills)
//at end
skills.pop()
console.log(skills)
skills.splice(1,3)
console.log(skills)

//-----------------------
