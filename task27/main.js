let i = prompt("Enter a number");
let a, flag = 1, n;
for (a = 2; a <= i; a++) {
    flag = 1;
    for (n = 2; n <= a / 2; n++) {
        if (a % n == 0) {
            flag = 0;
            break;
        }
    }
    if (flag == 1) {
        console.log(a);
    }
}