function solution(n) {
  let result = [];
  let div = 2;
  
  while (n >= 2) {
    if (n % div === 0) {
      result.push(div)
      n = n / div;
    }
     else div ++;
  }
  return [...new Set(result)];
}