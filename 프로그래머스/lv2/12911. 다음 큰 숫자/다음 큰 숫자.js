function solution(n) {
    let a = [...n.toString(2)].filter(el => el == 1).length
  let end = n + 100
  let start = n+1
  while(start < end) {
    if([...start.toString(2)].filter(el => el == 1).length == a) return start
    start++
  }
}