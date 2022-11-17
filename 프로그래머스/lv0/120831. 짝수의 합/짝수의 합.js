function solution(n) {
  let number = n%2
  let result = 0;
  if(number == 0) {
    for(let i=1; i<=n/2; i++) {
      result += 2*i
    }
  } else {
        for(let i=1; i<=n/2; i++) {
      result += 2*i
    }
  }
  return result
}