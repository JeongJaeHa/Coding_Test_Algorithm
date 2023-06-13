def solution(x):
    answer = True
    arr = list(map(int, str(x)))
    ha = sum(arr)
    if x % ha == 0:
        return True
    else:
        return False