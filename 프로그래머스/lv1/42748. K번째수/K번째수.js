function solution(array, commands) {
    var answer = [];
    let m=0;
    while(m<commands.length) {
      i = commands[m][0]
      j = commands[m][1]
      k = commands[m][2]
      m++
      let a = array.slice(i-1, j).sort((a, b) => a - b)
      answer.push(a[k-1])
    }
  
    return answer;
}