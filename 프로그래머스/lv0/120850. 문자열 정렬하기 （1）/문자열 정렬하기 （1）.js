function solution(my_string) {
  let arr = [...my_string]
  let newArr = []
    for(let i=0; i < arr.length; i++) {
      if(!isNaN(arr[i])) {
        newArr.push(Number(arr[i]))
      }
    }
  
  return newArr.sort()
}