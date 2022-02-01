class Calculadora{
    constructor(){
    }
    sumar(num1,num2){
        return parseInt(num1) + parseInt(num2);
    }
    restar(num1,num2){
        return parseInt(num1) - parseInt(num2);
    }
    dividir(num1,num2){
        return parseInt(num1) / parseInt(num2);
    }
    multiplicar(num1,num2){
        return parseInt(num1) * parseInt(num2);
    }
    potenciar(num,exp){
        return num**exp
    }
    raizcuadrada(num){
       return Math.sqrt(num); 
    }
    raizcubica(num){
        return Math.cbrt(num);
    }
}
const calculadora = new Calculadora();
alert("Que operacion deseas realizar?");
let operacion = prompt("1: suma, 2: resta, 3: division, 4: multiplicar, 5: Potenciacion, 6: Raiz Cuadrada, 7: Raiz Cubica");

if (operacion == 1){
    let numero1 = prompt("primer numero para sumar");
    let numero2 = prompt("segundo numero para sumar");
    resultado = calculadora.sumar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 2){
    let numero1 = prompt("primer numero para restar");
    let numero2 = prompt("segundo numero para restar");
    resultado = calculadora.restar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 3){
    let numero1 = prompt("primer numero para dividir");
    let numero2 = prompt("segundo numero para dividir");
    resultado = calculadora.dividir(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 4){
    let numero1 = prompt("primer numero para multiplicar");
    let numero2 = prompt("segundo numero para multiplicar");
    resultado = calculadora.multiplicar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 5){
        let numero1 = prompt("Numero A Potenciar");
        let numero2 = prompt("Exponente");
        resultado = calculadora.potenciar(numero1,numero2);
        alert(`Tu resultado es ${resultado}`);
}
    else if (operacion == 6){
            let numero1 = prompt("Conocer la raiz cuadrada de : ");
            resultado = calculadora.raizcuadrada(numero1);
            alert(`Tu resultado es ${resultado}`);
}
    else if (operacion == 7){
             let numero1 = prompt("Conocer la raiz Cubica de:");
             resultado = calculadora.raizcubica(numero1);
             alert(`Tu resultado es ${resultado}`);
} else {
    alert("No se encontro la operacion")
}