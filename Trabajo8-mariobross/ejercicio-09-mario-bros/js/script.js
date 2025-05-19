
let personajeActual = null; // bonus

const botonPresentar = document.querySelector('.btn'); // parte cinco

botonPresentar.addEventListener('click', function() { // parte seis
    const personajeElegido = prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)"); // parte uno
    
    // botonPresentar.style.display = 'none';
    console.log("El personaje elegido es: ", personajeElegido);
    
    // Parte dos
    
    let nombreCompleto;
    let idPersonaje = ""; // parte cuatro
    let personajeValido = true; // parte tres
    
    switch(personajeElegido?.toLowerCase()) { // parte dos y tres
        case "mario":
            nombreCompleto = "Mario";
            idPersonaje = "mario"
            break;
        case "luigi":
            nombreCompleto = "Luigi";
            idPersonaje = "luigi";
            break;
        case "bowser":
            nombreCompleto = "Bowser Morton Koopa";
            idPersonaje = "bowser";
            break;
        case "peach":
            nombreCompleto = "Princesa Peach Toadstool";
            idPersonaje = "peach";
            break;
        case "yoshi":
            nombreCompleto = "T. Yoshisaur Munchakoopas";
            idPersonaje = "yoshi";
            break;
        case "toad":
            nombreCompleto = "Toad";
            idPersonaje = "toad";
            break
        case "toadette":
            nombreCompleto = "Toadette";
            idPersonaje = "toadette";
            break;
        case "daisy":
            nombreCompleto = "Princesa Daisy";
            idPersonaje = "daisy";
            break;
        default:
            nombreCompleto = "(desconocido)";
            personajeValido = false; // parte tres
    }

    document.querySelector("h1 span").textContent = nombreCompleto;
    
    // parte tres
    
    if (personajeValido && personajeElegido) {
        // const idPersonaje = personajeElegido.toLowerCase();
        if (personajeActual) {
            personajeActual.style.display = "none"; // bonus ocultar
        }
        const elementoPersonaje = document.getElementById(idPersonaje);
        if (elementoPersonaje) {
            elementoPersonaje.setAttribute("title", "Presentado");
            elementoPersonaje.style.display = "block"; // bonus mostrar

            personajeActual = elementoPersonaje; // bonus
            console.log(`Se ha presentado: ${idPersonaje}`);
        } else {
            console.log(`No se encontró un elemento con ID: ${idPersonaje}`);
        }
    }
});

/* 
Me gustaría poder tener una corrección y explicacin de cómo se realiza
correctamente el bonus punto 1 y 2.
En el punto uno me pasa que no me doy cuenta cómo ocultar la cortina y no el div entero,
porque al presentar un nuevo personaje, me saca la caja del anteriormente mostrado.
También, cómo debería haber hecho el display none si fuese hecho directamente en CSS
y no desde el archivo js, y llamarlo desde ahí.
*/    