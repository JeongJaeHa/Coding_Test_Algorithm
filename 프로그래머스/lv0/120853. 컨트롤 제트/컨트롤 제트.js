function solution(s) {
    let arr = s.split(' ')
    let answer = 0;
  for(let i=0; i<arr.length; i++) {
    if(!isNaN(arr[i]) && !isNaN(arr[i+1])) answer += Number(arr[i])
    if(!isNaN(arr[i]) && arr[i+1] == undefined) answer += Number(arr[i])
  }
  return answer
}