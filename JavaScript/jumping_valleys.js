// https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
function countingValleys(steps, path) {
    // Write your code here
    let level = 1;
    let levels = [];
    let count = 0;
    
    Array.from(path).forEach(letter => {
      letter == "U" ? level++ : level--;
      levels.push(level);
    })
    
    for(let i = 0; i < steps; i++) {
       levels[i] == 1 && levels[i - 1] == 0 ? count++ : null ; 
    }
    return count;
}
