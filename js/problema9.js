function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var a = String.fromCharCode(teclado);

    return patron.test(a);
}

function sueldito (){
    if(formulario.sueldo.value.length == 0) {
        alert("No has introducido ningun valor valido");
        return;
    }
    
    if(formulario.sueldo.value.length > 2) {
        alert("Introduce una cantidad validad");
        return;
    }

    if(formulario.horas.value.length == 0) {
        alert("No has introducido ningun valor valido");
        return;
    }
    
    if(formulario.horas.value > 100) {
        alert("Introduce una cantidad validad");
        return;
    }

    var Salario = document.formulario.sueldo.value;  
    var salario = parseInt(Salario);
    var horas = document.formulario.horas.value;  
    var hora = parseInt(horas);

    if(hora <= 40) {
        var g = hora * salario;
        document.formulario.sueldote.value= g;
        return;
    }

    if(hora > 40) {
        if(hora <= 48){
            var saldo = (hora - 40) * salario * 2;
            var z = salario * 40; 
            var dif = parseInt(saldo);
            var k = parseInt(z);
            var g = k + dif;
            document.formulario.sueldote.value= g;
        return;


        } else{
            var a = salario * 40 ;
            var b = salario * 8 * 2;
            var c = (hora - 48)* salario * 3;
            var d = parseInt(a);
            var e = parseInt(b);
            var f = parseInt(c);
            var g = d + e + f;
            document.formulario.sueldote.value= g;
        return;
        }
    }
} 