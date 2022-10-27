var display = 0;
var numero1 = 0;
var numero2 = 0;
var curso = 0;
var total = 0;



function pres(tecla){
    ///display = document.getElementById("display").value;
    //document.getElementById("display").value = display + tecla;
    //display = parseInt(document.getElementById("display").value);
    if (total == 0){
        document.getElementById("display").value += tecla;
        numero1 = document.getElementById("display").value;
    }else{
        document.getElementById("display").value += tecla;
        numero2 = document.getElementById("display").value;
    }

    console.log();
}

function restar(){
    document.getElementById("display").value = "";
    total = parseInt(numero1) - parseInt(numero2);
    console.log();
}

