function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var a = String.fromCharCode(teclado);

    return patron.test(a);
}

function comision(){

    if(formulario.sueldo.value.length == 0) {
        alert("No has introducido ningun numero valido");
        return;
    }
    
    if(formulario.sueldo.value.length > 9) {
        alert("Introduce una cantidad validad");
        return;
    }

    if(formulario.ventas.value.length == 0) {
        alert("No has introducido ningun numero valido");
        return;
    }

    if(formulario.ventas.value.length > 2) {
        alert("Introduce una cantidad validad");
        return;
    }

    var base = document.formulario.sueldo.value;
    var ventas = document.formulario.ventas.value;  
    var sueldo = parseInt(base);
    var NumVentas = parseInt(ventas);
    var comisioon = sueldo*0.1*NumVentas;
    var total = sueldo + (sueldo*0.1*NumVentas);

    document.formulario.comisiones.value= comisioon;

    document.formulario.sueldom.value= total;
}