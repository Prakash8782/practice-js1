let i = prompt("Enter a number");
let r = 0, a, n;
temp = i;
while (temp > 0) {
    a =temp%10;
    r = r + (a * a * a);
    temp =Math.floor( temp / 10);
}
if (r == i) {
    console.log("Armstrong Number");
}
else {
    console.log("Not an Armstrong Number");
}