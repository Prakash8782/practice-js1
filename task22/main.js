i =prompt("Enter a number");
let sum =0,r;
while(i!=0){
    r=i%10;
    sum=sum+r;
    i=Math.floor(i=i/10);
}
console.log(sum);