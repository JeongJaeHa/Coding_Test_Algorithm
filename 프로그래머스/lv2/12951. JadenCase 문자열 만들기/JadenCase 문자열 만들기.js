function solution(s) {
var answer = ''
    return answer = s.split(' ').map(word=> word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()).join(' ')
}