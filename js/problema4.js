function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var a = String.fromCharCode(teclado);

    return patron.test(a);
}

function obtener (){

    if(formulario.primer.value.length == 0) {
        alert("No has introducido ningun numero valido");
        return;
    }

    if(formulario.primer.value > 10) {
        alert("Introduce una cantidad validad");
        return;
    }
    
 
    if(formulario.segundo.value.length == 0) {
        alert("No has introducido ningun numero valido");
        return;
    }

    if(formulario.segundo.value > 10) {
        alert("Introduce una cantidad validad");
        return;
    }


    if(formulario.tercero.value.length == 0) {
        alert("No has introducido ningun numero valido");
        return;
    }
    
    if(formulario.tercero.value > 10) {
        alert("Introduce una cantidad validad");
        return;
    }

    if(formulario.exfinal.value.length == 0) {
        alert("No has introducido ningun numero valido");
        return;
    }

    if(formulario.exfinal.value > 10) {
        alert("Introduce una cantidad validad");
        return;
    }
    

    if(formulario.trfinal.value.length == 0) {
        alert("No has introducido ningun numero valido");
        return;
    }

    if(formulario.trfinal.value > 10) {
        alert("Introduce una cantidad validad");
        return;
    }
    //Conversión de variables a enteros
    var uno = document.formulario.primer.value;  
    var first = parseInt(uno);
    var dos = document.formulario.segundo.value;  
    var second = parseInt(dos);
    var tres = document.formulario.tercero.value;  
    var third = parseInt(tres);
    var exf = document.formulario.exfinal.value;  
    var exif = parseInt(exf);
    var trf = document.formulario.trfinal.value;  
    var trif = parseInt(trf);

    var promedio = (first+second+third) / 3;
    var q = (promedio*55) / 10;
    var x = parseInt(q);
    var w = (exif*30) / 10;
    var y = parseInt(w);
    var e = (trif*15) / 10;
    var z = parseInt(e);
    var totalca = (x + y + z) / 10;

    document.formulario.calificacion.value= totalca;

}
