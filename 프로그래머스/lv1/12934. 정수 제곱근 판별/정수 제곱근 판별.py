import math

def solution(n):
    answer = 0
    x = math.sqrt(n)
    if x != int(x):
        return -1
    return (x+1) ** 2