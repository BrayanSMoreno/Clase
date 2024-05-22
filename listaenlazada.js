
///////creamos una clase por cada nodo
class node{
    //cada nodo tiene dos propiedades, su valor y otro es el puntero que nos indica que le sigue 
    next = null;
    valor = null;

    constructor(valor){
        this.valor = valor;
    }
}

//clase de la lista enlazada 
class listaenlazada {

    primero = null;
    ultimo = null;

// agregar a la lista 
    agregarDatos = (valor) => {

        //nuevo nodo
        const dato = new Node(valor);

        if(!this.primero){
            this.primero = dato;
            this.ultimo =dato;
            return;
        }

        this.ultimo.next = dato;
        this.ultimo = dato;
    }

    numDatos = () => {
        let contador = 0;
        let dato = this.primero;

        if (!dato)return 0;
        else contador = 1;


    while(dato.next){
        dato = dato.next;
        contador++;
    }
    return contador;

    }

    buscardato = (valor) => {
        let contador = 0;
        let dato = this.primero;

        if(!dato)return null;


        while((dato = dato.next)){
            if(dato.valor === valor){
                return dato;
            }
        }
        return null;
    }
}

const lista = new listaenlazada();
lista.agregarDatos('a');
console.log(lista.numDatos());