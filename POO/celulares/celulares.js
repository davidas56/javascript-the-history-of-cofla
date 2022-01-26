class Celular {
    constructor(color,peso,tamaño,rdc,ram){
        this.color=color;
        this.peso=peso;
        this.tamaño=tamaño;
        this.rdc=rdc;
        this.ram=ram;
        this.encendido = false
    }
    presionaBotonEncendido(){
        if(this.encendido == false){
            alert("celular prendido");
            this.encendido = true;
        }else {
            alert("celular apagado");
            this.encendido = false;
        }
    }
    reiniciar(){
        if(this.encendido == true){
            alert('reiniciando celular');
        } else {
            alert('el celular ya esta apagado')
        }
    }
    tomarfotos(){
        alert(`foto tomada en una resolucion de: ${this.rdc}`)
    }
    grabarvideo(){
        alert(`grabando video en ${this.rdc}`)
    }
    Celularinfo(){
        return `
        Color :<b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        tamaño: <b>${this.tamaño}</b></br>
        Resolucion de Video: <b>${this.rdc}</b></br>
        Memoria Ram: <b>${this.ram}</b></br>     `
    }
}

class celularaltagama extends Celular{
    constructor(color,peso,tamaño,rdc,ram,rdce){
        super(color,peso,tamaño,rdc,ram);
        this.resolucioncamaraextra = rdce; 
    }
    grabarvideolento(){
        alert('estas grabando en camara lenta');
    }
    reconocimientoFacial(){
        alert("iniciando reconocimiento facial");
    }
    mobileinfoaltagama(){
        return this.Celularinfo() + `Resolucion de Camara Trasera : ${this.resolucioncamaraextra}`;
    }
}

/* Celular1 = new Celular ("rojo",'150','5','1920',"full hd",'1');
Celular2 = new Celular ("rojo",'150','5','1920',"full hd",'1');
 */


/* celulares.presionaBotonEncendido();
celulares.tomarfotos();
celulares.grabarvideo();
celulares.reiniciar();
celulares.presionaBotonEncendido(); */
celular1 = new celularaltagama("rojo","130g","5,2","4k","3gb","full HD")
celular2 = new celularaltagama("rojo","130g","5,2","4k","3gb","HD")
document.write(`
${celular1.mobileinfoaltagama()} <br><br>
${celular2.mobileinfoaltagama()} <br>
`);