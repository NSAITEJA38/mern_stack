function addVal(val,total){
    return total+=val;
}
function discount(val,total){
    return total=total-val
}
let total=0;
total=addVal(500,total)
total=addVal(1200,total)
total=discount(200,total)
total=total+(total)*(18/100)
console.log("Fianally total bill is;",total)