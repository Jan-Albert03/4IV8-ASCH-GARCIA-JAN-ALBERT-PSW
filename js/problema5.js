function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var a = String.fromCharCode(teclado);

    return patron.test(a);
}

function calcular(){
    if(formulario.poblacion.value.length == 0) {
        alert("No has introducido ningun valor valido");
        return;
    }
    
    if(formulario.poblacion.value.length > 3) {
        alert("Introduce una cantidad validad");
        return;
    }

    if(formulario.Mu.value.length == 0) {
        alert("No has introducido ningun valor valido");
        return;
    }

    var pt = document.formulario.poblacion.value;
    var aa =parseInt(pt);
    
    if(formulario.Mu.value > aa) {
        alert("Introduce una cantidad validad");
        return;
    }

    if(formulario.Ho.value.length == 0) {
        alert("No has introducido ningun valor valido");
        return;
    }
    
    if(formulario.Ho.value > aa) {
        alert("Introduce una cantidad validad");
        return;
    }

    var M = document.formulario.Mu.value;
    var Muj =parseInt(M);
    var H = document.formulario.Ho.value;
    var Hom =parseInt(H);

    if(Muj+Hom > aa) {
        alert("NO SE PUEDE NO HAY TORTILLAS");
        return;
    }

    if(Muj+Hom < aa) {
        alert("NO SE PUEDE NO HAY TORTILLAS");
        return;
    }

    var muje = (Muj*100) / aa;
    var homb = (Hom*100) / aa;

    document.formulario.Cmujeres.value=muje+"%";
    document.formulario.Chombres.value=homb+"%";
}