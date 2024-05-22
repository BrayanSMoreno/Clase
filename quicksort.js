// Ejercicio Quick sort


let izq = [];
let der = [];
let pivote = arr.pop();
let long = arr.length;
let d = [];


function quicksort(arr){
    if(arr.length <= 1){
        return arr; 
    }

    for (let i=0, i< long; i++){
        if(arr[i] <= pivote){
            izq.push(arr[i]);
        }else{
            der.push(arr[i]);
        }
    }
    
}