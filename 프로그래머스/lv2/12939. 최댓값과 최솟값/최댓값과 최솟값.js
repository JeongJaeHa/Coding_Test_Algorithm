function solution(s) {
  let arr = []
    var answer = [...s.split(' ').sort(function(a,b) {return a-b})]
    arr.push(Math.min(...answer))
    arr.push(Math.max(...answer))
    return String(arr).replace(',', ' ')
}