//ejemplo de busqueda lineal o secuencial 

function bsecuencialL (arr, val){

    for (let i =0; i< arr.length; i++){
        if (arr[i]=== val){
            return i;
        }
    }
    return -1
}


let arr = [1,3,4,5,2,7,8,9,43,6,23,56];
console.log(bsecuencialL(arr,23));
console.log(bsecuencialL(arr,100));


//ejercicio busqueda binaria 

function busquedabinaria(arr, val){
    let Izq = 0;
    let Der = arr.length -1;

    while (Izq <= Der){
        let mitad = Math.floor((Izq + Der)/2);
        let num = arr[mitad];

        if (num == val){
            return mitad;
        }else if (val > num){
            Izq = mitad +1;

        }else {
            Der = mitad -1;
        }
    }
    return -1 
}

let arreglo = [1,3,4,5,7,8,9,43,23,56];
    console.log(busquedabinaria(arreglo,4));
    console.log(busquedabinaria(arreglo,23));


//ejercicio 2

function BBinaria(arreglos,de,iz,val){
    if(de > iz) return -1;


    let m = Math.floor((iz + de)/2);
    if(arreglos[m]==val) return m;

    if (arreglos [m]< val){
        return BBinaria (arreglos,m+1,iz,val);
    }else{
        return BBinaria (arreglos,de,m-1,val);
    }
}

let arreglos = [1,2,3,4,5,7,8,9,10,11,12,13,14,15];
console.log(BBinaria(arreglos,0,arreglos.length -1,11));
console.log(BBinaria(arreglos,0,arreglos.length -1,3));


// Ejercicios Mergesort

function mergesort(izq,der){
    let i = 0; 
    let j = 0;
    let Res = [];

    while ( i < izq.length || j < der.length){
        if (i === izq.length){
            Res.push(der[j]);
            ++j;
        }else if (j === der.length || izq [i] <= der[j]);
            Res.push(izq[])
    }

}