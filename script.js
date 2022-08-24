var ingreso = document.querySelector(".texto");
var salida = document.querySelector(".resul");



function Bencriptar()
{
    
    if(ingreso.value !== "")
    {
        const encriptado = encriptar(ingreso.value);
        salida.value = encriptado;
        salida.style.backgroundImage = "none";
        salida.style.width = "320px";
        //ocultar textos
        var textos = document.querySelector(".mensaje");
        textos.style.display = "none";
    
        //mostrar boton de copiar
        var copiar = document.querySelector(".copi");
        copiar.style.display = "block";
    
        ingreso.value ="";
    }

}

function Bdesencriptar()
{
    
    if(ingreso.value !== "")
    {
        const encriptado = desencriptar(ingreso.value);
        salida.value = encriptado;
        salida.style.backgroundImage = "none";
        salida.style.width = "320px";
        //ocultar textos
        var textos = document.querySelector(".mensaje");
        textos.style.display = "none";
    
        //mostrar boton de copiar
        var copiar = document.querySelector(".copi");
        copiar.style.display = "block";
        ingreso.value ="";
    }
   

}


function encriptar(mensaje)
{
    var matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u","ufat"]];

    for(var x = 0; x < matriz.length; x++)
    {
        if(mensaje.includes(matriz[x][0]))
        {
            mensaje = mensaje.replaceAll(matriz[x][0], matriz[x][1]);
        }
    }
    return mensaje;
} 


function desencriptar(mensaje)
{
    var matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u","ufat"]];

    for(var x = 0; x < matriz.length; x++)
    {
        if(mensaje.includes(matriz[x][1]))
        {
            mensaje = mensaje.replaceAll(matriz[x][1], matriz[x][0]);
        }
    }
    return mensaje;
}

function copiar()
{
    salida.select();
    navigator.clipboard.writeText(salida.value);
}
