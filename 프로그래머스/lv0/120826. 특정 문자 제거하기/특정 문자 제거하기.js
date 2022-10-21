function solution(my_string, letter) {
    var regex = new RegExp(`[${letter}]`, 'g')
    var answer = my_string.replace(regex, '')
    return answer;
}