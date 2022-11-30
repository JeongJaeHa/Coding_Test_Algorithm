function solution(n) {
      let trans = (arg) => Number(arg)
    return Array.from(String(n), trans).reverse()
}