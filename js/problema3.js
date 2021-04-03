function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var a = String.fromCharCode(teclado);

    return patron.test(a);
}

function descuento (){

    if(formulario.compra.value.length == 0) {
        alert("No has introducido ningun numero valido");
        return;
    }
    
    if(formulario.compra.value.length > 9) {
        alert("Introduce una cantidad validad");
        return;
    }

    var valor = document.formulario.compra.value;  
    var compra = parseInt(valor);
    var total = compra - (compra*0.15);

    document.formulario.total.value= total;

}