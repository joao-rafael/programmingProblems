const multiChecker = number => {
    if(number % 5 == 0 && number % 3 == 0){
        console.log('FizzBuzz');
        return;
    }else if(number % 5 == 0){
        console.log('Buzz');
        return;
    }else if(number % 3 == 0){
        console.log('Fizz');
        return;
    }
    console.log(number);
}

function fizzBuzz(n) {
    // Write your code here
        for(let i = 1; i <= n; i++){
            multiChecker(i);
        }
}