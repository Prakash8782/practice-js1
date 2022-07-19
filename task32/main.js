const i = prompt('Enter a year:');
    if ((0 == i % 4) && (0 != i % 100) || (0 == i % 400)) {
        console.log(i + ' is a leap year');
    } else {
        console.log(i + ' is not a leap year');
    }

