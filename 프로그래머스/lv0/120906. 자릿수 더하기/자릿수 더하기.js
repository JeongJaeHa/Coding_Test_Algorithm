function solution(s) {
  let answer = 0
  let arr = [...String(s)]
  for(let i=0; i<arr.length; i++) {
    answer += Number(arr[i])
    
  }
  return answer
}