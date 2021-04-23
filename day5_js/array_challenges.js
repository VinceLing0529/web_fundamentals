//high pass
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(i=0;i<arr.length;i++){
        if(arr[i]>cutoff){
            filteredArr.push(arr[i]);
        }
    }
    // your code here
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]
//*---------------------------------
//Evens or Odds
function evensOfOdds(arr) {
    var totalOdds = 0;
    var totalEvens = 0;
    for(i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            totalEvens+=arr[i];
        }
        if(arr[i]%2==1){
            totalOdds+=arr[i];
        }
    }   
    if(totalOdds>totalEvens){
        return "odd are larger"
    }
    if(totalOdds<totalEvens){
        return "even are larger"
    }
    // your code here
}

var result = evensOfOdds([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back "evens are larger"
//*---------------------------------
//better than average
function betterThanAverage(arr) {
    var sum = 0;
    for(i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    var average=sum/arr.length
    // calculate the average
    var count = 0
    for(i=0;i<arr.length;i++){
        if(average<arr[i]){
            count++;
        }
    }
    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

//*---------------------------------
//fibonacci array
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for(i=3;i<=n;i++){
        var nextterm=fibArr[i-3]+fibArr[i-2];
        fibArr.push(nextterm);
    }
    // your code here
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]