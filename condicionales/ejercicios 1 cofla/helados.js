dinerocofla = prompt("cuanto dinero tienes cofla?");
dineroroberto = prompt("cuanto dinero tienes roberto?");
dineropedro = prompt("cuanto dinero tienes pedro?");

dinerocofla = parseInt(dinerocofla);

if(dinerocofla >= 0.6 && dinerocofla < 1){
alert("cofla comprate el helado de agua");
alert("y te sobran" + (dinerocofla - 0.6));
}
else if (dinerocofla >= 1 && dinerocofla < 1.6){
alert("cofla comprate el helado de crema");
alert("y te sobran" + (dinerocofla - 1));
}
else if (dinerocofla >= 1.6 && dinerocofla < 1.7){
    alert("cofla comprate el helado de crema");
    alert("y te sobran" + (dinerocofla - 1.6));
}
else if (dinerocofla >= 1.7 &&   dinerocofla < 1.8){
    alert("cofla comprate el helado de heladix") ;
    alert("y te sobran" + (dinerocofla - 1.7)) ;
}
else if (dinerocofla >= 1.8 && dinerocofla < 2.9){
    alert("cofla comprate el helado de heladovich");
    alert("y te sobran" + (dinerocofla - 1.8));
}
else if (dinerocofla >= 2.9){
    alert("cofla comprate el helado de confites o el puto de 1/4 kg ");
    alert("y te sobran" + (dinerocofla - 2.9));
}
else{
    alert("lo siento no hay helado para ti, pobre");
}
if(dineroroberto >= 0.6 && dineroroberto < 1){
    alert("roberto comprate el helado de agua");
    }
    else if (dineroroberto >= 1 && dineroroberto < 1.6){
    alert("roberto comprate el helado de crema");
    }
    else if (dineroroberto >= 1.6 && dineroroberto < 1.7){
        alert("roberto comprate el helado de crema");
    }
    else if (dineroroberto >= 1.7 && dineroroberto < 1.8){
        alert("roberto comprate el helado de heladix");
    }
    else if (dineroroberto >= 1.8 && dineroroberto < 2.9){
        alert("roberto comprate el helado de heladovich");
    }
    else if (dineroroberto >= 2.9){
        alert("roberto comprate el helado de confites o el puto de 1/4 kg ");
    }
    else{   
        alert("lo siento no hay helado para ti, pobre")
    }
    if(dineropedro >= 0.6 && dineropedro < 1){
        alert("pedro comprate el helado de agua");
        }
        else if (dineropedro >= 1 && dineropedro < 1.6){
        alert("pedro comprate el helado de crema");
        }
        else if (dineropedro >= 1.6 && dineropedro < 1.7){
            alert("pedro comprate el helado de crema");
        }
        else if (dineropedro >= 1.7 && dineropedro < 1.8){
            alert("pedro comprate el helado de heladix");
        }
        else if (dineropedro >= 1.8 && dineropedro < 2.9){
            alert("pedro comprate el helado de heladovich");
        }
        else if (dineropedro >= 2.9){
            alert("pedro comprate el helado de confites o el puto de 1/4 kg ");
        }
        else{
            alert("lo siento no hay helado para ti, pobre");
        }