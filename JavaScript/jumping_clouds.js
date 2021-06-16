// jumping on clouds - https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=warmup&isFullScreen=true
function jumpingOnClouds(c) {
    // Write your code here
    let jumps = 0;
    let i = 0;
    
    while (i < c.length){
        if(c[i] == 0 && c[i+2] == 0) {
            jumps += 1;
            i += 2;
            continue;
        } else if(c[i] == 0 && c[i+1] == 0) {
            jumps += 1;
            i++;
            continue;
        } else if(c[i] == 1 && c[i+1] == 0) {
            jumps +=1;
            i++;
            continue
        }
        i++;
    }
    return jumps;
}
