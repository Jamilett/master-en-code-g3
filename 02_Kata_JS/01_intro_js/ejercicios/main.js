/*
                    Variables
-----------------------------------------------------
    1.- Guarda en tres variables el nombre de las
    siguientes mascotas:
    1) Pedrito  
    2) Rufo
    3) Chancla
    Muestra las variables en consola en un mensaje 
    con un formato como el siguiente: 
"Mis mascotas son Pedrito, Rufo y Chancla. Les quiero mucho"
-----------------------------------------------------
*/

let mascota_1 = 'Pedrito';
let mascota_2 = 'Rufo';
let mascota_3 = 'Chancla';

console.log("Mis mascotas son " + mascota_1 + ", " + mascota_2 + " y " + mascota_3 + ". Les quiero mucho");

/*
                  Input & Output
-----------------------------------------------------
    2.- Pide mediante prompts el nombre de dos
    frutas. Guarda los nombres de las frutas 
    en variables y luego muéstralas en consola
    en un mensaje con un formato como el siguiente:
    "Hoy compré fruta1 y fruta2 en el mercado"
-----------------------------------------------------
*/

let fruta_1 = prompt("Introduce el nombre de la primera fruta");
let fruta_2 = prompt("Introduce el nombre de la segunda fruta");

console.log("Hoy compré " + fruta_1 + " y " + fruta_2 + " en el mercado");

/*
            Conversión de Tipos de Datos
-----------------------------------------------------
    3.- Guarda la cadena de texto "100" en una 
    variable.
    Muestra esta cadena en consola.
    Muestra el TIPO DE DATO de la variable en consola.
    Transforma la variable a tipo de dato NUMERO
    Muestra la nueva variable en consola.
-----------------------------------------------------
*/

let numero = "100";
console.log(numero, typeof numero);

numero = Number(numero);
console.log(numero, typeof numero);

