const checkIfFive = number => {
    if(number % 5 == 0){
        return true;
    }else{
        return false;
    }
}

const checkIfThree = number => {
    if(number %  3 == 0){
        return true;
    }else{
        return false;
    }
}

function fizzBuzz(n) {
    // Write your code here
    for(let i = 0; i < n; i++){
        let m = 15;
        if(checkIfThree(m) && checkIfFive(m)){
            console.log('FizzBuzz');
            continue;
        }else if(checkIfThree(m)){
            console.log('Fizz');
            continue;

        }else if(checkIfFive(m)){
            console.log('Buzz');
            continue;
        }
        console.log(m);
    }
}

fizzBuzz(5);