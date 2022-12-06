function solution(s1, s2) {
  for(let i = 0; i< s1.length; i++) {
    let a = s1.slice(i, i+s2.length)
    if(a == s2) return 1
  }
  return 2
}