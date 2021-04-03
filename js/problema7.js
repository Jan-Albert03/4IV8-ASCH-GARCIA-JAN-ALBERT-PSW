function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var a = String.fromCharCode(teclado);

    return patron.test(a);
}

function cal (){
    if(formulario.Num1.value.length == 0) {
        alert("No has introducido ningun valor valido");
        return;
    }
    
    if(formulario.Num1.value.length > 4) {
        alert("Introduce una cantidad validad");
        return;
    }

    if(formulario.Num2.value.length == 0) {
        alert("No has introducido ningun valor valido");
        return;
    }
    
    if(formulario.Num2.value.length > 4) {
        alert("Introduce una cantidad validad");
        return;
    }

    var Num1 = document.formulario.Num1.value;  
    var x = parseInt(Num1);
    var Num2 = document.formulario.Num2.value;  
    var y = parseInt(Num2);

    if (x == y){
        var multi = x * y;
        document.formulario.resultadoM.value=multi;
        return;
    }

    if (x > y){
        var resta = x - y;
        document.formulario.resultadoM.value=resta;
        return;
    }

    if (x < y){
        var suma = x + y;
        document.formulario.resultadoM.value=suma;
        return;
    } 
}