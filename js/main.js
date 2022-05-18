
//PROGRAMACIÓN ORIENTA A OBJETOS

// let alumno1 = {
//     nombre: "Ibrahim",
//     edad: 43,
//     domicilio: "Avda. Paral.lel",
//     hobbies: {
//         hobbie1 : "Jugar Basketball",
//         hobbie2 : "Tomar mezcal",
//         hobbie3 : "Tinder"
//     },
//     coches : ["mercedes","jaguar","ferrari"]
// };

// let alumno2 = {
//     nombre: "Marc",
//     edad: 24,
//     domicilio: "Palau Solità i plegamans",
//     hobbies: {
//         hobbie1 : "Salir a tomar algo",
//         hobbie2 : "Ir a carreras ilegales de coche",
//         hobbie3 : "Tontear con chicas en Pacha"
//     },
//     coches : ["ford","opel","seat"]

// };

// alumno2.hobbies.hobbie2 = "Ganar en las carreras de coche";

// alumno2.coches.push("McLaren");

// console.log(alumno2.coches);





//EJERCICIO PROGRAMACIÓN ORIENTADA A OBJETOS:

let nombre = prompt("Introduzca su nombre");

let edad = parseInt(prompt("Introduzca su edad"));

let peliculaPregunta = prompt("Qué película quieres ver???");

// let leyenda = {
//     titulo: "Soy leyenda",
//     pegi: 13
// }

// let leon = {
//     titulo: "El rey leon",
//     pegi: 3
// }

// let demonio = {
//     titulo: "La marca del demonio",
//     pegi: 18
// }

// let gas = {
//     titulo: "A todo gas",
//     pegi: 8
// }

let peliculas = {
    pelicula1 : {
        nombre: "Soy leyenda",
        pegi: 13
    },
    pelicula2 : {
        nombre: "El rey leon",
        pegi: 3
    },
    pelicula3 : {
        nombre: "La marca del demonio",
        pegi: 18
    },
    pelicula4 : {
        nombre: "A todo gas",
        pegi: 8
    },
};

for(let pelicula in peliculas){

    if(peliculas[pelicula].nombre === peliculaPregunta){

        if(edad >= peliculas[pelicula].pegi){
            console.log("puedes ver... ", peliculas[pelicula].nombre);
        }else {
            console.log("No puedes ver este tipo de películas");
        };
    }
    
};