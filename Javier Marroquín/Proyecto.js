//Arreglo de preguntas
var preguntas = [
    "¿Cuanto es 1Gb?",
    "¿Cuál no es un lenguaje de programación?",
    "¿Que significa GHz?",
    "¿Cual de la siguiente opciones no es un motor de búsqueda?",
    "¿Que direccion de correo electronico es la correcta?",
    "¿Cuál es el nombre de este símbolo '@'?",
    "Facebook, Twitter e Instagram son ejemplos de:",
    "Apple Inc. es una:",
    "El TCP/Ip es una:",
    "SSD y HDD son:"
];
//Arreglo de respuestas
var respuestas = [
    ["1024 Mb","1024 Ghz","1024 Km","1024 Kb"],
    ["Html", "Ruby", "Java", "Python"],
    ["Gigahercio", "Gigabit", "Gigabyte", "Ninguna es correcta"],
    ["Microsoft Office","Google","Yahoo","Bing"],
    ["javier2001@gmail.com","javier2001@.com","gmail@javier2001.com",".com/javier@gmail"],
    ["Arroba","Slash","Dominio","Clave"],
    ["Redes Sociales","Hardware","Sistemas Operativos","Ninguna es correcta"],
    ["Empresa tecnológica","Frutería","Empresa ganadera", "Universidad"],
    ["Familia de protocolos en internet", "Una banda norteña", "Siglas de Ten Cuidado con el Perro", "Ninguna es correcta"],
    ["Ninguna es correcta","Marcas de computadoras","Protocolos de internet","Dominios de internet"]
];
//Funcion para iniciar el juego
jugar();
//Declaracion de Variables
var indice_respuesta_correcta;
function jugar(){
var indice_aleatorio = Math.floor(Math.random()*preguntas.length);
var respuestas_posibles = respuestas[indice_aleatorio];
var posiciones = [0,1,2,3];
var respuestas_reordenadas=[];
var reentrada = false;

//Ciclo para obtener una posicion aleatoria
for (i in respuestas_posibles) {
    var posicion_aleatoria = Math.floor(Math.random()*posiciones.length)
    if (posicion_aleatoria == 0 && reentrada == false) {
        indice_respuesta_correcta = i;
        reentrada = true;
    }
        respuestas_reordenadas[i] = respuestas_posibles[posiciones[posicion_aleatoria]];
        posiciones.splice(posicion_aleatoria, 1);    
}

//Escribir posibles respuestas
var txt_respuestas = "";
for (i in respuestas_reordenadas) {
    txt_respuestas += '<input type="radio" name = "pp" value="'+i+'"><label>'+respuestas_reordenadas[i]+'</label></br>';
}
document.getElementById("respuestas").innerHTML = txt_respuestas;
document.getElementById("pregunta").innerHTML = preguntas[indice_aleatorio];

}

//Funcion para comprobar si la respuesta es correcta o incorrecta
function comprobar() {
    var respuesta = $("input[type=radio]:checked").val();
    if (respuesta == indice_respuesta_correcta) {
        //Imprimir que la respuesta es correcta
        correcto = document.getElementById("correctoIncorrecto")
        puntos = parseInt(document.getElementById("puntos").value);
        puntos = puntos + 1

        //Determinar si el juego se completó
        if (puntos == 10) {
            document.getElementById("correctoIncorrecto").value = "Completado"
            puntos = 0;
            alert("")
        }else{
            document.getElementById("correctoIncorrecto").value = "Correcto"
        }
        document.getElementById("puntos").value = String(puntos);   
    } else {
        //Imprimir que la respuesta es incorrecta
        incorrecto = document.getElementById("correctoIncorrecto")
        document.getElementById("correctoIncorrecto").value = "Incorrecto"
        
    }
    jugar()
}
