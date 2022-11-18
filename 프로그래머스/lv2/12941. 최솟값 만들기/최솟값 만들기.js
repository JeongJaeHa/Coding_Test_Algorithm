function solution(A,B){
    var answer = 0;

    a = A.sort((a,b) => a-b)
    b = B.sort((a,b) => b-a)
  let i = 0;
    while(i < A.length) {
        answer += a[i]*b[i]
        i++
    }

    return answer;
}