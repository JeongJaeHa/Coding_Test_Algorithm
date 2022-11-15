function solution(rsp) {
    var arr = [];
    let arr2 = [...rsp]
    for(let i=0; i<arr2.length; i++){
      if(arr2[i] == 0) {
        arr.push('5')
      } else if (arr2[i] == 2)  {
        arr.push('0')
      } else  {
        arr.push('2')
      }
    }
    return arr.join('');
}