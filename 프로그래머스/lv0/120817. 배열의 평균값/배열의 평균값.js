function solution(n) {
const result = n.reduce(function add(sum, currValue) {
  return sum + currValue;
}, 0);

const average = result / n.length;
  return average
}