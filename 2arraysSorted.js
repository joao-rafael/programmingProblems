const arr1 = [1,3,5,6,8];
const arr2 = [8,2,9];

const merge = (arr1, arr2) => {
    arr2 = arr2.concat(arr1);
    return arr2;
}

const bubbleSort = arr => {
    let n = arr.length;
    let swapper;
    let swap = true;
    while(swap){
        swap = false;
        for(let i = 0; i < n-1; i++){
            if(arr[i] > arr[i+1]){
                swap = true;
                swapper = arr[i +1];
                arr[i+1] = arr[i];
                arr[i] = swapper;
            }
        }
    }
    return arr;
}

const main = (arr1, arr2) => {
    let merged = merge(arr1, arr2);
    merged = bubbleSort(merged);
    console.log(merged);
}

main(arr1, arr2);
