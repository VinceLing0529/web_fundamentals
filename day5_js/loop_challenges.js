//Print odds 1-20
for(i=1;i<=20;i++){
    if(i%2==1){
        console.log(i);
    }
    
}

//print the sequence
for(i=4;i>=-3.5;i-=1.5){

        console.log(i);
    
}

//sigma
var sum = 0;
for(i=1;i<=100;i++){
    sum  += i;
}
console.log(sum)

//factorial
var product=1;
for(var i = 2 ; i<10000; i++){
    product=product*i;
    if(product>(1*10**8)){
        console.log(i)
        return product;
    }
}
