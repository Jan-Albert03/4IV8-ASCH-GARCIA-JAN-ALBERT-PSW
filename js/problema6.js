function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var a = String.fromCharCode(teclado);

    return patron.test(a);
}

function Caledad (){
    if(formulario.añon.value.length == 0) {
        alert("No has introducido ningun valor valido");
        return;
    }

    if(formulario.añoc.value.length == 0) {
        alert("No has introducido ningun valor valido");
        return;
    }

    var añona = document.formulario.añon.value;  
    var añonac = parseInt(añona);
    var añoct = document.formulario.añoc.value;  
    var añoctu = parseInt(añoct);
    
    if(añonac > añoctu) {
        alert("Introduce una cantidad validad");
        return;
    }
    if(añoctu - añonac > 100) {
        alert("Introduce una cantidad validad");
        return;
    }

    if(añoctu - añonac < 0) {
        alert("Introduce una cantidad validad");
        return;
    }

    var tuedad = añoctu-añonac;

    document.formulario.edad.value=tuedad+" años";
}