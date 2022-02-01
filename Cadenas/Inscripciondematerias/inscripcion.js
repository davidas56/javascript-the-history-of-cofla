const materias = {
    fisica: ["Perez","pedro","pepito","cofla","maria"],
    programacion: ["Dalto","pedro","juan","pepito"],
    logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
    quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"]
}

const inscribir = (alumno,materia)=>{
    personas = materias[materia];
    personas.shift();
    gente = personas;
    if (alumno.length >= 2){
        document.write(`lo siento <b>${alumno}</b>, las clases de <b style "color:red">${materia}</b> ya estan llenas`);
    }
}
inscribir("pedrito","fisica")