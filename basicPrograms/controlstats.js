//example 1 on control statements
let isLoggedIn=true
let isProfileComplete=false
let res
function findProfileReady(isLoggedIn,isProfileComplete){
    if(!isLoggedIn){
        res="Please login"
    }
    else if(isLoggedIn && !isProfileComplete){
        res="Complete your profile"
    }
    else if(isLoggedIn && isProfileComplete){
        res="Welcome Back!"
    }
}
findProfileReady(true,false)
console.log("status:",res);
findProfileReady(false,false)
console.log("status:",res);
findProfileReady(true,true)
console.log("status:",res);
findProfileReady(false,true)
console.log("status:",res);




//example 2 on control statements
let label
function findLabel(price){
    if(price < 500){
        label="Budget Course"
    }
    else if(500 < price && price < 1000){
        label="Standard Course"
    }
    else if(price > 1000){
        label ="Premium Course"
    }
}
findLabel(1299)
console.log("value is:",label)
findLabel(399)
console.log("value is:",label)
findLabel(599)
console.log("value is:",label)

