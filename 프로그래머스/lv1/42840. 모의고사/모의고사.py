def solution(answers):
    answer = []
    score=[0,0,0]
    
    a1 = [1,2,3,4,5]
    a2 = [2,1,2,3,2,4,2,5]
    a3 = [3,3,1,1,2,2,4,4,5,5]
    
    for idx,ans in enumerate(answers):
        if a1[idx % 5] == ans:
            score[0] += 1
        if a2[idx % 8] == ans:
            score[1] += 1
        if a3[idx % 10] == ans:
            score[2] += 1
    for idx, s in enumerate(score):
        if s == max(score):
            answer.append(idx + 1)
    return answer