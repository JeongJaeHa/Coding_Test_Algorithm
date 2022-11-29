function solution(s) {
  let a = [...s].sort((a, b) => a[0] - b[0])
  let result = (a[0][1] - a[1][1]) * (a[1][0] - a[2][0])
  return Math.abs(result);
}