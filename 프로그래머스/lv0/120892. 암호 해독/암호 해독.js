function solution(cipher, code) {
  let newArr = []
    let arr = [...cipher]
    console.log(arr.length)
   for(let i=1; i<=arr.length/code; i++){
     newArr.push(arr[code*i-1])
   }
  return newArr.join('')
}