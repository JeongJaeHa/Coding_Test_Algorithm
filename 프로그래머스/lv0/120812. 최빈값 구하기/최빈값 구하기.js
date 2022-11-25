function solution(arr) {
  count = 0;
  const getElCount = (arr) => arr.reduce((ac, v) => ({ ...ac, [v]: (ac[v] || 0) + 1 }), {});
  const test = getElCount(arr);
  a = Object.values(test)
  max = Math.max(...Object.values(test))
  for(let i=0; i<a.length; i++) {
    if(a[i] == max) count ++
    if(count > 1) return -1
  }
  b = Object.keys(test).find(key => test[key] === max);
  return Number(b)
}