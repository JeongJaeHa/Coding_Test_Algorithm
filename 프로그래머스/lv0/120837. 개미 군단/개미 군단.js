function solution(hp) {
    var answer = 0;
    var leader = 5;
    var soldier = 3;
    var normal = 1;
    var first = Math.floor(hp/leader)
    var rest = Math.floor(hp%leader)
    var second = Math.floor(rest/soldier)
    var rest2 = Math.floor(rest%soldier)
    var third = Math.floor(rest2/normal)
    var answer = first + second + third
    return answer;
}