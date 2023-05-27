
let str =  ["sun", "bed", "car"];
const num = 1;

function test (str,num) {
    let result = [];
    let i = 0;
    let k = 0;
    str.forEach((a) => {
        str[i] = a[num] + a;
        i++;
    });
    str.sort();
    str.forEach((a) => {
        str[k] = str[k].replace(str[k][0],"");
        result.push(str[k])
        k++;
    });
    return result;
}
let result = test(str,num);
