function solution(s) {
  let answer = [];
  let dic = {zero:0, one:1, two:2, three:3, four:4, five:5 ,six:6, seven:7, eight:8, nine:9};
  let arr = [...s]
  let newArr = [];
  let regE = /\d/
  for(let i=0; i<arr.length; i++) {
    if(regE.test(arr[i])) {
      answer.push(arr[i])
    } else {
      newArr.push(arr[i])
      let str = newArr.join('')
      if(dic[str] || dic[str] == 0) {
        answer.push(dic[str])
        newArr = []
      }
    }
  }
  return Number(answer.join(''))
}