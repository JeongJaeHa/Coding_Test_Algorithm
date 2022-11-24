function solution(s) {
  let st = [...s]
  let result = [];
  let arr = new Set(s)
  let newArr = [...arr]
  for(let i = 0; i<newArr.length; i++){
      let arr2 = st.filter(el => el == newArr[i])
      if(arr2.length == 1) result.push(newArr[i])
  }

  return result.sort().join('')
}