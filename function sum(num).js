//https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript

function sum (num) {
    let s = 0;
    for (let i = 0; i<num.length; i++){
        s = s + num[i];
    }
    return s;

};

function sum (num) {
    return (num.length>0) ? num.reduce((acc,curr)=> acc + curr):0
};

function sum (num) {
    return (num.length>0) ? num.reduce((acc,curr)=> acc + curr):0
};