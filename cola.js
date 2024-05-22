class Node{

    constructor(value){
        this.value = value;
        this.next = null;
    }
}


//Creamos una clase para la cola 

class Queue {
    constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;

    }

    //El metodo enqueue recibe un valor y lo  agrega al final de la cola 

    enqueue(val){

        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;

        }else{
            this.last.next = newNode;
            this.last = newNode;
        }

        return ++this.size ;
    }

    dequeue(){
        if(!this.first) return null
        let temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }

        this.first = this.first.next;
        this.size--
        return temp.value;
    }

}


const vCola = new Queue;
vCola.enqueue('valor1');
vCola.enqueue('valor2');
vCola.enqueue('valor3');
vCola.enqueue('valor4');

console.log(vCola.first);
console.log(vCola.last);
console.log(vCola.size);
vCola.enqueue('valor5');
console.log(vCola.dequeue());
console.log('Muestrame los nodos de la cola'); 
console.log(vCola.first);
