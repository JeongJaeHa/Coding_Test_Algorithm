function solution(s) {
  return [...String(s)].reduce((a, b) => Number(a) + Number(b), 0);
}