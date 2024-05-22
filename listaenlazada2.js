//creamos una clase que nos va a servir para cada nodo en la lista 

class node{
    //este nodo tiene dos propiedades, el valor y el puntero que indique el nodo que sigue 
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

//cramos la clase principal Linkedlist
class Linkedlist{
    //va a llevar denttro del constructor en este caso 3 propiedades, el encabezado, la cola y el tamaño
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;

    }

    //creamos nuestro metodo push toma un valor del parametro y lo asigna al final (insertar)
    push(val){
        const nNode = new Node = (val);
        if(!this.head){
            this.head = nNode;
            this.tail = this.head;
        } else {
            this.tail.next = nNode;
            this.tail = nNode;
        }
        this.length++
        return this
}

    //creamos un metodo que nos va a eliminar la cola de la lista 
    pop(){
        if(!this.head) return undefined
        let current = this.head;
        let nTail = current;

        while (current.next){
            nTail = current;
            current = current.next;
        }
        this.tail = nTail;
        this.tail.next = null
        this.length--

        if (this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;

    }

    //metodo que nos coloque un elemento para actualizar la cabecera 
    ActualC(val){
        const nNode = new Node (val);
        if (!this.head){
        this.head = nNode
        this.tail = this.head;
        
        }

        nNode.next = this.head;
        this.head = nNode
        this.length++
        return this.length;

    }

}

const lista = new Linkedlist();
lista.push ('a');
lista.push ('b');
lista.push ('c');   
console.log(lista);