class Node {
    constructor(value) {
        this.value = value;
        this.siguiente = null;
    }
}



class Stack {

    constructor() {
        this.primero = null;
        this.ultimo = null;
        this.size = 0;
    }



    peek() {
        return this.primero;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.primero) {
            this.primero = newNode;
            this.ultimo = newNode;
        } else {
            let temp = this.primero;
            this.primero = newNode;
            this.primero.siguiente = temp;
        }

        return ++this.size;
    }


    pop() {
        if (this.primero) return null

        let temp = this.primero;
        if (this.primero === this.ultimo){
            this.ultimo = null;
        }
        this.primero = this.primero.siguiente;
        this.size-- ;
        return temp.value;
    }

}


const pila = new Stack;
pila.push('Dato1');
pila.push('Dato2');
pila.push('Dato3');
pila.push('Dato4');
console.log(pila.primero);
console.log('probar metodo peek');
pila.push('Dato5');
console.log(pila.peek());
console.log(pila.ultimo);
console.log(pila.size);
console.log('Eliminar dato');
console.log(pila.pop());
console.log('Verificar nodo en la pila');
console.log(pila.primero);