function solution(n) {
  let arr = [...JSON.stringify(n)]  
  return Number(arr.sort((a,b) => b - a).join(''))
}