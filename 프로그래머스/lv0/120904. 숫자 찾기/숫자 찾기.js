function solution(num, k) {
  let arr = Array.from(String(num))
  for(i=0; i<=arr.length-1; i++) {
    if(arr[i] == k) {
      let value = i+1
      return value
    }
  }
  return -1
}