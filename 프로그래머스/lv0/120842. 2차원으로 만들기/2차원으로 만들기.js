function solution(s, n) {
  let arr = []
  for(let i=0; i<s.length/n; i++){
    let a =  s.slice(i*n, i*n+n)
    arr.push(a)
  }
  return arr
}