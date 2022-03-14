function fizzbuzz() {
    for (let index = 0; index <= 151; index++) { 
        if (index%3 && index%5 == 0) {
            console.log("Fizz");
        } else if (index%5 == 0) {
            console.log("Buzz");
        } else if (index%3 == 0) {
            console.log("FizzBuzz");
        } else {
            console.log(index);
        }
    }
}
fizzbuzz();