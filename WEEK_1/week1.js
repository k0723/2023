function solution(s){
    var answer ;
    let slength = s.length;
    let cnt = 0;
    let Ycnt = 0;
    let i;
    for(i =0; i<=s.length; i++){
        if(s[i]==="p")
            {
                cnt++;
            }
        else if(s[i]==="y")
            {
                Ycnt++;
            }
    };
    if(cnt==Ycnt)
        {
            answer = true;      
        }
    else
        {
            answer = false;
        }
    return answer;
}

// 대문자 빼먹음
function solution(s){
    var answer ;
    let slength = s.length;
    let cnt = 0;
    let Ycnt = 0;
    let i;
    for(i =0; i<=s.length; i++){
        if(s[i]=="p" || s[i]=="P")
            {
                cnt++;
            }
        else if(s[i]=="y" || s[i]=="Y")
            {
                Ycnt++;
            }
    };
    console.log(cnt);
    console.log(Ycnt);
    if(cnt==Ycnt)
        {
            answer = true;      
        }
    else
        {
            answer = false;
        }
    return answer;
}
// 음양 더하기
function solution(absolutes, signs) {
    var answer = 123456789;
    let i = 0;
    let k = 0;
    let result = 0;
    for(i; i<signs.length; i++)
        {
            if(signs[i]==false)
                {
                    result -= absolutes[i];
                    console.log(result);
                    continue;
                }
            result += absolutes[i];
        }
    answer = result ;
    return answer;
}