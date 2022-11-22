function solution(s) {
  let count = 0;
  let remove = 0;

  const length = s.length
  for(let i=0; i<length; i++) {
      let a = [...s]
      let arr2 = a.filter(el => el == 0)
      remove += arr2.length
    if(a.length == 1) {
      return [count, remove]
    }
      count += 1
      s = a.filter(el => el == 1).length.toString(2)
  }
}