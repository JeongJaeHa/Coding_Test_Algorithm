function solution(before, after) {
  let sort = str => [...str].sort((a, b) => (a < b ? -1 : a !== b ? 1 : 0)).join('')
  if(sort(before) == sort(after)) {
    return 1
  } else return 0
}