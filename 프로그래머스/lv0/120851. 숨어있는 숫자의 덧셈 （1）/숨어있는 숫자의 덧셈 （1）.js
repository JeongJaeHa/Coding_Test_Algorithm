function solution(string) {
    const arr = [...string]
    const b = (arr.filter((e) => e > 0))
    let answer = 0;
  
    for(let i =0; i<b.length; i++) {
      answer = answer + Number(b[i])
    }
    return answer
}