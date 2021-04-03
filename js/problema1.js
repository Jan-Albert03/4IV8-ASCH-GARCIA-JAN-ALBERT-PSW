function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var a = String.fromCharCode(teclado);

    return patron.test(a);
}

function interes(){

    if(formulario.cantidad.value.length == 0) {
        alert("No has introducido ningun numero valido");
        return;
    }
    
    if(formulario.cantidad.value.length > 9) {
        alert("Introduce una cantidad validad");
        return;
    }

    var valor = document.formulario.cantidad.value;
    var resultado = parseInt(valor);
    var interes = resultado * 0.02;
    var total = resultado + interes;

    document.formulario.sueldoFinal.value= total;
}

    
