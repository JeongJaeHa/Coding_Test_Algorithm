function solution(order) {
    var answer = 0;
    var a = String(order)
    var b = a.split('')
    for(i=0; i<b.length; i++) {
      if(b[i] == 3 || b[i] == 6 || b[i] == 9) 
          answer++
    }
    return answer;
}