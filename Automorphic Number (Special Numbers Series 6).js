//https://www.codewars.com/kata/5a58d889880385c2f40000aa/train/javascript

function automorphic(n){
    return ((Math.pow(n,2)+'').endsWith(n))? "Automorphic" : "Not!!";
}
