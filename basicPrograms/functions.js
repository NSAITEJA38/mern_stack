function findBigNumber(a,b,c){
    if(a>b && a>c){
        return a;
    }
    else if(b>a && b>c){
        return b;
    }
    else{
        return c;
    }
}
let big=findBigNumber(10,20,12);
console.log('biggest number amoung 3:',big)


