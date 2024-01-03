let a =Math.ceil(Math.random() * 6);
let b =Math.ceil(Math.random() * 6);
let c =Math.ceil(Math.random() * 6);
let result=0;

console.log(`${a} ${b} ${c}`);
if (a==b && b==c){
    result=a*1000+10000;
}
else if (a==b || b==c || c==a){
    if(a==b)
        result=a*100+1000;
    else if (b==c)
        result=b*100+1000;
    else
        result=a*100+1000;
}
else{
    if(a-b>0 && a-c>0){
        result=a*100;
    }
    else if(b-c>0 && b-a>0){
        result=b*100;
    }
    else{
        result=c*100;
    }
}

console.log(result);