class Empleado{
    constructor(id, nombres, TDocumento, NoDocumento, Cargo, Tipocontrato, Salario){
        this._id = id;
        this._nombres = nombres;
        this._TDocumento = TDocumento;
        this._NoDocumento = NoDocumento;
        this._Cargo = Cargo;
        this._Tipocontrato = Tipocontrato;
        this._Salario = Salario;
    }

    get getId(){
        return this._id;
    }

    set setIt(id){
        this._id = id;
    }

    get getNombres(){
        return this._nombres;
    }

    set setNombres(nombres){
        this._nombres =nombres;
    }
    
    get getNTDocumento(){
        return this._TDocumento;
    }

    set setTDocumento(TDocumento){
        this._TDocumento = TDocumento;
    }

    get getNoDocumento(){
        return this._NoDocumento;
    }

    set setNoDocumento(NoDocumento){
        this._NoDocumento =NoDocumento;
    }

    get getCargo(){
        return this._Cargo;
    }

    set setCargo(Cargo){
        this._Cargo =Cargo;
    }

    get getTipocontrato(){
        return this._Tipocontrato;
    }

    set setTipocontrato(Tipocontrato){
        this._Tipocontrato =Tipocontrato;
    }

    get getSalario(){
        return this._Salario;
    }

    set setSalario(Salario){
        this._Salario =Salario;
    }

    get getInformacion (){
      
        return `id: ${this._id} ${this._nombres} ${this._TDocumento} ${this._NoDocumento} ${this._Cargo} ${this._Tipocontrato} ${this._Salario}` 
    }

}

class supervisor extends Empleado{
    constructor(id, nombres, TDocumento, NoDocumento, Cargo, Tipocontrato, Salario, pCargo){
        super(id, nombres, TDocumento, NoDocumento, Cargo, Tipocontrato, Salario);
        this._pCargo = pCargo;
}

get getCargo(){
    return this._pCargo;
}
set setpCargo(pCargo){
    this._pCargo = pCargo;
}

get getInformacion (){
    return `${super.getInformacion} ${this._pCargo}`
}

}
let Empleado1 = new Empleado (1,"Alejandro Diaz", "Cedula", 1000863826, "Administrador", "Indefinido", 3500);
let Empleado2 = new supervisor (1,"Kewin Restrepo", "cedula", 26473298, "soporte", "ops", 53738, "vigilancia");

//console.log(Empleado1.getInformacion);
console.log(Empleado2.getInformacion);