let i = prompt("Enter a number");
let a;
for (a = 2; a <= i / 2; a++) {
    if (i % a == 0) {
        console.log(i + " is not a prime number");
        exit;
    }
}
console.log(i + " is a prime number");