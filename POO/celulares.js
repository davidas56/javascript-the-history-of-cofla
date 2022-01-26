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
        retrun `
        Color :<b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        tamaño: <b>${this.tamaño}</b></br>
        Resolucion de Video: <b>${this.rdc}</b></br>
        Memoria Ram: <b>${this.ram}</b></br>     `
    }
}

Celular = new Celular ("rojo",'150','5','1920',"full hd",'1');



/* celulares.presionaBotonEncendido();
celulares.tomarfotos();
celulares.grabarvideo();
celulares.reiniciar();
celulares.presionaBotonEncendido(); */
document.write(`
${Celular.Celularinfo()} <br>
`);