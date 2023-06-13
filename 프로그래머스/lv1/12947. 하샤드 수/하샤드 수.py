def solution(x):
    answer = True
    arr = list(map(int, str(x)))
    ha = sum(arr)
    return x % ha == 0