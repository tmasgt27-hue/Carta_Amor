// ==========================================================
// PARA TI ✨
// CONECTANDO CON EL UNIVERSO 🌌
//
// SCRIPT.JS V3
//
// PARTE 1
// • Referencias del DOM
// • Constantes
// • Variables
// • Datos del proyecto
// ==========================================================





// ==========================================================
// REFERENCIAS DEL DOM
// ==========================================================

// Audio
const musica = document.getElementById("musica");

// Intro
const estadoUniverso = document.getElementById("estadoUniverso");
const btnInicio = document.getElementById("btnInicio");

// Carta
const textoCarta = document.getElementById("textoCarta");
const botonAbrir = document.getElementById("botonAbrir");
const botonContinuar = document.getElementById("botonContinuar");

// Astronauta
const astronautaImg = document.getElementById("astronautaImg");

// Tickets
const ticketTitulo = document.getElementById("ticketTitulo");
const ticketContenido = document.getElementById("ticketContenido");
const botonTicket = document.getElementById("botonTicket");

// Todas las escenas
const escenas = document.querySelectorAll(".escena");





// ==========================================================
// FRASES DEL UNIVERSO
// ==========================================================

const FRASES_UNIVERSO = [

    "Sincronizando constelaciones...",

    "Buscando el recuerdo correcto...",

    "Leyendo el destino...",

    "Destino encontrado ✨"

];





// ==========================================================
// MENSAJE DE LA CARTA
// ==========================================================

const MENSAJE_CARTA = `Mi amor...

Gracias por hacer cada uno de mis días más bonitos.

Hoy quiero recordarte que eres una de las personas más importantes de mi vida y jamás cambiaría por nada la suerte de haberte encontrado.

Eres la mejor "coincidencia" que Dios puso en mi camino, una de esas personas que llegan sin avisar y terminan convirtiéndose en un lugar al que siempre quiero volver.`;





// ==========================================================
// TICKETS
// ==========================================================

const TICKETS = [

    {
        titulo: "CAMINA CONMIGO",

        contenido:
        "Quiero descubrir cada rincón del universo contigo, compartir caminos, sueños y momentos que solo tengan sentido porque estamos juntos."
    },

    {
        titulo: "AUNQUE ESTÉS LEJOS",

        contenido:
        "Aunque existan distancias enormes, siempre habrá una parte de mí buscando la forma de estar contigo."
    },

    {
        titulo: "SIEMPRE TE ELEGIRÍA",

        contenido:
        "Entre millones de personas, caminos y universos, volvería a encontrarte y volvería a elegirte."
    },

    {
        titulo: "NUESTRO UNIVERSO",

        contenido:
        "El universo puede ser infinito, pero encontrarte hizo que mi pequeño mundo fuera suficiente."
    }

];





// ==========================================================
// VARIABLES
// ==========================================================

// Frases del inicio
let indiceFrase = 0;

// Carta
let cartaAbierta = false;

// Astronauta
let animacionAstronauta = null;

// Tickets
let ticketsDisponibles = [];
let indiceTicket = 0;
let ultimoTicket = false;

// Temporizadores
let intervaloFrases = null;
let temporizadorEscritura = null;
