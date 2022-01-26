class App{
    constructor(descargar,puntuacion,peso){
     this.descargar = descargar;
     this.puntuacion = puntuacion;
     this.peso = peso;
     this.iniciada = false;
     this.instalada = false;
    }
    abrir(){
     if(this.iniciada = false && this.instalada == true){
         this.iniciada == true;
         alert("app encendida");
     } 
    }
    cerrar(){
        if(this.iniciada = true && this.instalada == true){
            this.iniciada == false;
            alert("app cerrada");
        } 
    }
    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert('app instalada corectamente')
            }
        }
    desisnstalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert('app desinstalada corectamente')
        }
    }
    appinfo(){
        return `
        Descargar : <b>${this.descargar}</b><br>
        Puntuacion : <b>${this.puntuacion}</b><br>
        Peso : <b>${this.peso}</b><br>
        `
    }
}

app = new App ("18,000"," 5 estrellas","900mb");
app2 = new App ("15,000"," 4 estrellas","400mb");
app3 = new App ("10,000"," 3 estrellas","500mb");
app4 = new App ("9,000"," 2 estrellas","600mb");
app5 = new App ("19,000"," 4 estrellas","800mb");

document.write(`
  ${app.appinfo()} <br>
  ${app2.appinfo()} <br>
  ${app3.appinfo()} <br>
  ${app4.appinfo()} <br>
  ${app5.appinfo()} <br>
`)
