def solution(ingredient):
    arr = []
    cnt = 0
    for i in ingredient:
        arr.append(i)
        if arr[-4:] == [1, 2, 3, 1]:
            cnt += 1
            for _ in range(4):
                arr.pop()
    return cnt