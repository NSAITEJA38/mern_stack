let marks=[100,34,56,35,34,65]
let s=0;
for(let i of marks){
    s+=i;
}
console.log(s)

//write a function that recives marks array as argument and returns small element
let small=marks[0]
function findsmallElement(marks){
    for(let i of marks){
        if(small >= i){
            small=i;
        }
    }
}
findsmallElement(marks,)
console.log("small element is :",small)



/* write a function that recives "skills" array and "skillsname" as argument ans 
return the index if skillName existed other wise "skill not found" */

function findSkills(skills,skillName){
    for(let i=0;i<skills.length;i++){
        if(skills[i]==skillName){
            return i;
        }
    }
    return "skill not found";
}
let skills=['javascript','c++','c','python','java','c#']
let res=findSkills(skills,"java")
console.log('index of skill:',res)