function solution(array, height) {
    var answer = 0;
    return answer = array.filter((el)=>{return el > height;}).length;
}