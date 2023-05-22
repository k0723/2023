
let x = 10;

if(x<0) 
{
    console.log("x는 양수")
}

let y = "Hello World";

if(y.length >=5)
{
    console.log("길이는 5이상")
}

if(x < 0)
{
    console.log('1')
}
else if(x >= 0 && x<10)
{
    console.log('2')
}
else
{
    console.log('3')
}

let fruit = "사과";

switch(fruit)
{
    case "사과":
        console.log('사과')
    case "사과":
        console.log('사과')
    case "사과":
        console.log('사과')
    default:
        console.log('아무것도 아닙니다.')
}