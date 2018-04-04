(function(){
    // visualizarTarjeta();
    document.getElementById("direccion").addEventListener("keyup", visualizarTarjeta, false);
    document.getElementById("pais").addEventListener("change", visualizarTarjeta, false);
    // validar();
})();

function visualizarTarjeta(){
    console.log("Entra en visualizar tarjeta");
    var dir=document.getElementById("direccion");
    var pais=document.getElementById("pais");
    var pais_sel=pais.options[pais.selectedIndex];
    var tar=document.getElementById("tarjeta");
    console.log("Direccion vale: "+dir.value+", pais vale: "+pais_sel.value);
    if(dir.value != "" && !dir.value && pais_sel.value != "" && !pais_sel){
        console.log("Direccion vale: "+dir.value+", pais vale: "+pais_sel.value);
        tar.style.display = "block";
    }
}

function validar(){
    var formulario=document.getElementById("formulario_contacto");
    if(formulario){
       for(var i=0;i<formulario.elements.length;i++){
           formulario.elements[i].value;
       } 
    }
}

