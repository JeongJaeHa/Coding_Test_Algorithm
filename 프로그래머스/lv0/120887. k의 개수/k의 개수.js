function solution(i, j, k) {
  let newArr =[]
    for(let m = i; m<=j; m++) {
      newArr.push(m)
    }

  let newStr = newArr.join('')
  let idx = newStr.indexOf(k)
  let count = 0;
  
  while(idx != -1){
    count ++;
    idx = newStr.indexOf(k,idx+1);
}
   return count
}