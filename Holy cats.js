//https://www.codewars.com/kata/58ebfa6ef7cda1a3d4000048/train/javascript

function holycats(input){
    let arr = [];
    for (let el of input){
        if(/^[a-zA-Z]+$/.test(el)){continue;}
        arr.push(el)
    }
    return arr;
}

function holycats(input){
    let arr =[];
    for(let i = 0; i < input.length; i++){
        if(input[i] !== 'wicked' && input[i] !== 'normal'){
            arr.push(input[i]);
        }
    }
    return arr;
}

