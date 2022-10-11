function solution(num_list) {
    var answer = [];
    var even = 0;
    var odd = 0;
    for(i=0; i<num_list.length; i++) {
        var a = num_list[i] % 2
        if(a == 0) {
            even++
        } else {
         odd++   
        }
    }
    answer.push(even, odd);
    return answer;
}