function solution(s1, n) {
  let arr = [];
  for(let i=0; i<s1.length; i++) {
    arr.push(s1[i].repeat(n))
    
  }
  return arr.join('')
}