function solution(a, b) {
    let answer = 0;
  if(a>b){
      let i = b;
  while(i<=a){
    answer += i
    i++
  }
  return answer
  }
  let i = a;
  while(i<=b){
    answer += i
    i++
  }
  return answer
}