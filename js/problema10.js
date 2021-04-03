function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var a = String.fromCharCode(teclado);

    return patron.test(a);
}

function utilidad(){
    if(formulario.sueldo.value.length == 0) {
        alert("No has introducido ningun valor valido");
        return;
    }
    
    if(formulario.sueldo.value.length > 5) {
        alert("Introduce una cantidad validad");
        return;
    }

    if(formulario.meses.value.length == 0) {
        alert("No has introducido ningun valor valido");
        return;
    }
    
    if(formulario.sueldo.meses > 720) {
        alert("Introduce una cantidad validad");
        return;
    }

    var suel = document.formulario.sueldo.value;  
    var sueldo = parseInt(suel);
    var me = document.formulario.meses.value;  
    var meses = parseInt(me);

    if(meses < 12) {
        var total = sueldo * 0.05;
        document.formulario.util.value="$"+ total;
        return;
    }

    if( 12 <= meses < 24) {
        var total = sueldo * 0.07;
        document.formulario.util.value="$"+ total;
        return;
    }

    if( 24 <= meses < 60) {
        var total = sueldo * 0.1;
        document.formulario.util.value="$"+ total;
        return;
    }

    if( 60 <= meses < 120) {
        var total = sueldo * 0.15;
        document.formulario.util.value="$"+ total;
        return;
    }

    if( meses > 120) {
        var total = sueldo * 0.2;
        document.formulario.util.value="$"+ total;
        return;
    }
}
