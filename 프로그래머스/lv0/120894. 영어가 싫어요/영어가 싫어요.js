function solution(numbers) {
  let dic = {zero:0, one:1, two:2, three:3, four:4, five:5 ,six:6, seven:7, eight:8, nine:9}
  let arr = [...numbers]
  let result = []
  let newArr = []
  for(let i=0; i<arr.length; i++){
    newArr.push(arr[i])
    let str = newArr.join('')
    if(dic[str] || dic[str] == 0) {
      result.push(dic[str])
      newArr = []
    }
  }
  return Number(result.join(''))
}