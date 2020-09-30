//https://www.codewars.com/kata/5a434a9dc5e284724f000011/train/javascript

function replaceCommon(string, letter) {
    let str = string.replace(/\s/gi, '');
    let obj = {};
    let l =[] ;
    for (let i = 0; i<str.length; i++){
        if ( str[i] in obj){
            obj[str[i]]+=1;
        } else obj[str[i]]=1;
    }
    let max = Math.max(...Object.values(obj))
    let ent = Object.entries(obj);
    for (let i =0; i<ent.length; i++){
        if (ent[i][1] == max) l.push(ent[i][0]);
    }
    return string.replace(new RegExp(`${l[0]}`, 'g'), letter)
}
