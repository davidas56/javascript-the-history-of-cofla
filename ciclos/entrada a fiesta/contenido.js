let free = false;

const validarcliente = (time)=>{
    let edad  = prompt("cual es tu edad?");
    if (edad >= 18){
        if (time >= 2 && time < 7 && free == false){
            alert("podes pasar gratis papu")
            free = true;
        }else{
            alert(`son las ${time}:00HS y tenes que pagar la entrada`)
        }

    }else{
        alert("menor de edad no podes pasar ")
    }
}

    validarcliente(prompt("Hora de entrada"));

