function mergesort(izq, der){

    let i = 0;
    let j = 0;
    let Res = [];

    while (i < izq.length || j < der.length){
        if(i=== izq.length){
            Res.push(der[j]);
            ++j;
        }else if (j === der.length || izq[i] <= der[j]){
            Res.push(izq[i]);
            i++;
        }else{
            Res.push(der[j]);
            ++j;
        }
    }
    return Res;
}

let ar1 = [2,8,7];
let ar2 = [13,11,17];

let res = mergesort(ar1, ar2);
console.log(res);
console.log(res.length);
