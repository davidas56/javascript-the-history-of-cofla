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
}

app1 = new App ("18,000"," 5 estrellas","900mb")