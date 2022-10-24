function solution(array) {
    var answer = [];
    answer.push(array[0])
    answer.push(0)
    for(i=0; i<array.length; i++) {
        if(array[i] > answer[0]) {
            answer.splice(0,1,array[i])
            answer.splice(1,1,i)
        }
    }
    return answer;
}