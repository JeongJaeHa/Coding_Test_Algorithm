function solution(s) {
  let xArr = [];
  let yArr = [];
  for(let i=0; i<s.length; i++){
    if(s[i][0] > s[i][1]) {
      xArr.push(s[i][0])
      yArr.push(s[i][1])
    } else {
      yArr.push(s[i][0])
      xArr.push(s[i][1])
    }
  }

  let xMax = Math.max(...xArr)
  let yMax = Math.max(...yArr)
  return xMax*yMax
}