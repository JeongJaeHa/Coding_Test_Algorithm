function solution(n, k) {
    let a = Math.floor(n / 10)
    let newK = k - a
    return n*12000 + newK*2000
}