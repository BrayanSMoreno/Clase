//funcion para grafos 
function Graph(){
    this.adjlist = {};
}


Graph.prototype.addvertex = function(vertex){
    if (!this.adjlist[vertex]){
        this.adjlist[vertex] = [];
    }
};

Graph.prototype.addedge = function (vertex1,vertex2){
    this.adjlist[vertex1].push(vertex2);
    this.adjlist[vertex2].push(vertex1);
};

//crear un nuevo grafo 

const graph = new Graph();
graph.addvertex ('A');
graph.addvertex ('B');
graph.addedge ('A', 'B');
console.log(graph.adjlist);

//creamos una clase de grafos 
class Grapha{
    //Creamos el constructor que lleva una propiedad que lleva la lista adyacente
    constructor(){
        this.adjlist = {};
    }

//creamos una funcion o metodo que se va a llamar addNode, tomar valor del nodo parametrp 
//lo va a agregar como clave 

addNode(node){
    if (!this.adjlist[node]) this.adjalist[node] = [];
}

// addConexion tomar 2 nodos como parametros y agrega cada nodo a la matriz de conexion del otro 
addconexion(node1, node2){
    this.adjlist
}

}