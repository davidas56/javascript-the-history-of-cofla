let cantidad = prompt("cuantos alumnos son?");
let alumnostotales = [];

for (i=0; i < cantidad ; i++){
    alumnostotales[i] = [prompt("nombre del alumno " + (i+1)),0]
}

const tomarasistencia = (nombre,p)=>{
     let presencia = prompt(nombre);
     if (presencia =='p' || presencia == 'P'){
         alumnostotales[p][1]++;
     }
}

for(i = 0; i < 30; i++ ){
    for (alumno in alumnostotales){
        tomarasistencia(alumnostotales[alumno][0],alumno)
    }
}
for (alumno in alumnostotales){
    let resultado = `${alumnostotales[alumno][0]}:<br>
    __________Asistencias: ${alumnostotales[alumno][1]}:<br>
    __________Ausencias: ${30 - alumnostotales[alumno][1]}
    `;
    if (30 - alumnostotales[alumno][1] > 18) {
        resulta += "<b style = 'color:red'>Reprovado por inasistencias</b> <br><br>";
    }else{
        resultado +="<br><br>"
    }
    document.write(resultado);
}