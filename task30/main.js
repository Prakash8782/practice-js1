let i = prompt("Enter a number");
let fact, a, b;
for (a = 1; a <= i; a++) {
    fact = 1;
    for (b = a; b >= 1; b--) {
        fact = fact * b;
    }
    console.log(fact);
}