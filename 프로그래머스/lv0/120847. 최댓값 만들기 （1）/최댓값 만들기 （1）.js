function solution(n) {
  let arr = n.sort((a,b) => a - b)
  return arr[arr.length-1]*arr[arr.length-2]
}