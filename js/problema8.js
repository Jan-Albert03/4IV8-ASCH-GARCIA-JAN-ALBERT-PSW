function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var a = String.fromCharCode(teclado);

    return patron.test(a);
}


    
function c(){
    if(formulario.Num1.value.length == 0) {
        alert("No has introducido ningun valor valido");
        return;
    }
    
    if(formulario.Num1.value.length > 8) {
        alert("Introduce una cantidad validad");
        return;
    }

    if(formulario.Num2.value.length == 0) {
        alert("No has introducido ningun valor valido");
        return;
    }
    
    if(formulario.Num2.value.length > 8) {
        alert("Introduce una cantidad validad");
        return;
    }

    if(formulario.Num3.value.length == 0) {
        alert("No has introducido ningun valor valido");
        return;
    }
    
    if(formulario.Num3.value.length > 8) {
        alert("Introduce una cantidad validad");
        return;
    }

    var Num1 = document.formulario.Num1.value;  
    var x = parseInt(Num1);
    var Num2 = document.formulario.Num2.value;  
    var y = parseInt(Num2);
    var Num3 = document.formulario.Num3.value;  
    var z = parseInt(Num3);

    if(x > y){
        if(x > z){
            document.formulario.Numga.value= x;

        } else{
            document.formulario.Numga.value= z;
        }

    } else {
        if(y > z){
            document.formulario.Numga.value= y;

        } else{
            document.formulario.Numga.value= z;
        }

    }

}
