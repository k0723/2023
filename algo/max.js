function find_max_num(a)
{
    let str = a;
    let arr = str.split("");
    const result = {};

    arr.forEach((x) => {
        console.log(x)
        result[x] = (result[x] || 0) + 1;
        console.log(result[x])
    });

  return result;
}

console.log(find_max_num("aaabbcc"))
