export class Cliente{
    constructor(nombre, impuesto){
        this._nombre = nombre;
        this._impuesto =  impuesto;
    }

set nombre(value){
    this._nombre = value
}

get nombre(){
    return this._nombre
}
//método 

    calcularImpuesto (){
            
            return (this._impuesto.montoBrutoAnual - this._impuesto.deducciones)* 0.21
        
}
}