function solution(s){
    let arr = [...s]
    let answer = 0;
  if(arr[0] === ')') return false
    for(let i=0; i<arr.length; i++) {
      if(arr[i] === '(') {
        answer +=1
      } else {
        answer -=1
        if(answer < 0 ) return false
      }
    }
  return answer === 0 ? true : false
}