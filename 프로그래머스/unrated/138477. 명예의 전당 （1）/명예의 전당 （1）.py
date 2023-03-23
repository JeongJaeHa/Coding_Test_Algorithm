def solution(k, score):
    arr = [];
    answer = [];
    for i in score:
        arr.append(i)
        if len(arr) == k and min(arr) > i:
            continue
        if len(arr) > k:
            arr.sort()
            arr.pop(0)
        answer.append(min(arr))
    return answer
            