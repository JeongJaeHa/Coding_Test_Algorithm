function solution(price, money, count) {
   let num = 0;
    for(let i=0; i<=count; i++) {
      num += i
    } 
  if(price*num <= money) return 0
  return price*num - money
}