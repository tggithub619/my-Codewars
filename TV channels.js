//https://www.codewars.com/kata/5836dce6966f8d1d43000007/solutions/javascript/me/best_practice

function redarr(arr) {
    let zeroD = arr.filter((el, i)  => arr.indexOf(el) === i).sort();
    let obj = {};
    for ( let i=0; i < zeroD.length; i++){
        obj[i]=zeroD[i]
    }
    return obj
}

function redarr(arr) {
    return Object.assign({}, Array.from(new Set(arr)).sort());
}
