i=prompt("Enter a number");
let r,n=0;
while(i!=0){
    r=i%10;
    n=n*10+r;
    i=(i/10);
}
console.log(n);
