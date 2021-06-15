// url: https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=warmup&isFullScreen=true
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function getOcurrences(elem, ar) {
    let c = 0;
    ar.forEach((i) => {
        if(i === elem) {
            c++;
        }
    })
    if(c < 2) {
        return 0;
    } if(c == 2 || c == 3) {
        return 1;
    } if (c >= 4) {
        return Math.floor(c / 2);
    } else {
        return 0;
    }
}

function sockMerchant(n, ar) {
    // Write your code here
    let socks = [];
    let c = 0;
    
    // conta elementos diferentes
    for(let i = 0; i < n; i++){
        if(!socks.includes(ar[i])){
            socks.push(ar[i]);
        }
    }
    
    // retorna número de pares
    socks.forEach((elem)=> {
        c += getOcurrences(elem, ar)
    })
    
    return c;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
}
