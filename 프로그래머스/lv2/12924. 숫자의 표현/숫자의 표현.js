function solution(n) {
    let count = 0;
    for ( let i = 1 ; i < n/2 + 1 ; i++ ){
        // 1부터 i항까지의 합 sum
        const sum = i * (i + 1) / 2;
        // n에서 sum을 뺀 수는 다시 i의 배수가 되어야 한다.
        const sub = n - sum;
        if(sub < 0) break;
        if(sub % i === 0){
            count++;
        }
    }
    return count;
}