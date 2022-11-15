function solution(arr) {
    var answer = 0;
    arr.forEach(function(el) {
                         answer += el
                         })
    return answer / arr.length
}