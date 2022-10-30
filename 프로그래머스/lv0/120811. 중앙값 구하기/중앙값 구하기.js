function solution(array) {
    let arr1 = array.sort((a,b) => (a-b));
    let middle = Math.floor(arr1.length/2);
    return arr1[middle]
}