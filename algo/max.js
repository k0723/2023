function find_max_num(array)
{
    let i = 0;
    let alp = [];
    let map1 = new Map();
    let str;
    array.split("");
    for(i; i<array.length; i++)
    {
        map1.set(array[i], 1);
            if(array[i] == array[i+1])
            {
                let value1 = map1.values(array[i]);
                console.log(value1)
                map1.set(array[i], value1+1);
            }
    }
    return map1;
}

console.log(find_max_num("aaabbcc"))