function solution(x, n) {
    let arr =[];
    let result = 0;
    for(let i=1; i<=n; i++){
        result = x*i
        arr.push(result)
        if(arr.length == n) return arr
    }
}