import "./style.css";

/* // Tipar funcion normal con TypeScript

function areaDelCirculo(radio:number):number {
  return Math.PI * radio ** 2;
}

console.log(areaDelCirculo(5));

// Tipar funcion flecha con TypeScript

const areaDelCirculo2 = (radio:number):number => Math.PI * radio ** 2;

console.log(areaDelCirculo2(5));

// Tipar funciones con TypeScript

function areaDelCuadrado(lado:number):number {
  return lado * lado;
}

const areaDelCuadrado2 = (lado:number):number => lado * lado;


console.log(areaDelCuadrado(5));
console.log(areaDelCuadrado2(5)); */

// Recetas de cocina

/* const lechuga = "🥬 Lechuga";
const setas = "🍄 Setas";
const alubias = "🫘 Alubias";
const cebolla = "🧅 Cebolla";
const maiz = "🌽 Maíz";
const arandanos = "🫐 Arándanos";
const aceitunas = "🫒 Aceitunas";
const pina = "🍍 Piña";
const mango = "🥭 Mango";
const zanahoria = "🥕 Zanahoria";
const tomate = "🍅 Tomate";
const pepino = "🥒 Pepino";
const aguacate = "🥑 Aguacate";
const bacon = "🥓 Bacon";
const huevos = "🥚 Huevos";
const queso = "🧀 Queso";

function pintaReceta(titulo:string, ingredientes:string, preparacion:string) {
    // Estilos
    const estiloTitulo = "background-color: blue; font-size: 18px; padding: 8px; color: white;";
    const estiloIngredientes = "background-color: white; color: black; font-size: 16px; padding: 8px;";
    const estiloPreparacion = "background-color: black; color: white; font-size: 14px; padding: 8px;";

    // Titulo de la receta
    console.log(`%c${titulo}`, estiloTitulo);
    // Ingredientes
    console.log(`%cIngredientes: ${ingredientes}`, estiloIngredientes);
    // Preparacion
    console.log(`%cPreparación: ${preparacion}`, estiloPreparacion);
    }

pintaReceta(
    "Ensalada de alubias con aguacate y huevo",
    `${alubias}, ${aguacate}, ${huevos}, ${cebolla}, ${tomate}, ${lechuga}`,
    "Cocer las alubias, cortar las verduras y mezclar todo en un bol."
    );   

pintaReceta(
    "Ensalada de setas con bacon",
    `${setas}, ${bacon}, ${cebolla}, ${tomate}, ${lechuga}, ${queso}`,
    "Saltear las setas y el bacon hasta que estén dorados. Mezclar con lechuga troceada, tomate en cubos, cebolla en juliana y queso rallado. Aliñar con aceite de oliva y vinagre."
    );

pintaReceta(
    "Ensalada de arándanos y pollo",
    `${arandanos}, pollo cocido, ${lechuga}, ${zanahoria}, ${queso}, nueces`,
    "Mezclar los arándanos con el pollo cocido en cubos, lechuga troceada, zanahoria rallada, queso rallado y nueces picadas. Aliñar con una vinagreta de miel y mostaza."
    );

pintaReceta(
    "Ensalada de maíz y piña",
    `${maiz}, ${pina}, ${lechuga}, ${pepino}, ${cebolla}, ${aguacate}`,
    "Mezclar el maíz con la piña en cubos, lechuga troceada, pepino en rodajas, cebolla en juliana y aguacate en cubos. Aliñar con una vinagreta de aceite de oliva y vinagre."
    );

pintaReceta(
    "Ensalada de mango y queso feta",
    `${mango}, ${queso}, ${lechuga}, ${cebolla}, ${pepino}, ${aceitunas}`,
    "Mezclar el mango en cubos con el queso feta desmenuzado, lechuga troceada, cebolla en juliana, pepino en rodajas y aceitunas. Aliñar con una vinagreta de limón y aceite de oliva."
    );  */

/*     function sumar() {
        // Leer los valores de los inputs
        const sumando1 = (document.getElementById("sumando1") as HTMLInputElement).value;
        const sumando2 = (document.getElementById("sumando2") as HTMLInputElement).value;

        // Sumar los dos numeros
        const resultado = parseInt(sumando1) + parseInt(sumando2);

        // Mostrar el resultado en el HTML
        const resultadoElemento = document.getElementById("resultado");

        if (resultadoElemento !== null && resultadoElemento !== undefined) {
            resultadoElemento.innerHTML = resultado.toString();
        }

    }

    // Asignar la funcion sumar al boton
    const botonSumar = document.getElementById("sumar");

    if (botonSumar !== null && botonSumar !== undefined) {
        botonSumar.addEventListener("click", sumar);
    }


 */

/*     function cambiarFotoPrincipal(idMiniatura:string):void {
        const fotoPrincipal = document.getElementById("foto-principal");
        const miniatura = document.getElementById(idMiniatura);

        if (fotoPrincipal !== null && fotoPrincipal !== undefined && miniatura !== null && miniatura !== undefined) {
     
        if (fotoPrincipal instanceof HTMLImageElement && miniatura instanceof HTMLImageElement) {
            fotoPrincipal.src = miniatura.src;
            fotoPrincipal.alt = miniatura.alt;
            }
        }
     
        const miniatura1 = document.getElementById("miniatura1");
        const miniatura2 = document.getElementById("miniatura2");
        const miniatura3 = document.getElementById("miniatura3");
        const miniatura4 = document.getElementById("miniatura4");

       
        if (miniatura1 !== null && miniatura1 !== undefined) {
        miniatura1.addEventListener("click", () => cambiarFotoPrincipal("miniatura1"));
        }
        if (miniatura2 !== null && miniatura2 !== undefined) {
        miniatura2.addEventListener("click", () => cambiarFotoPrincipal("miniatura2"));
        }
        if (miniatura3 !== null && miniatura3 !== undefined) {
        miniatura3.addEventListener("click", () => cambiarFotoPrincipal("miniatura3"));
        }
        if (miniatura4 !== null && miniatura4 !== undefined) {
        miniatura4.addEventListener("click", () => cambiarFotoPrincipal("miniatura4"));
        }
    }

    cambiarFotoPrincipal("miniatura1"); */

 let turnoActual: number = 1;

 function actualizarTurnoDisplay() {
     const numeroTurno = document.getElementById("numero-turno") as HTMLHeadElement;
    numeroTurno.textContent = turnoActual.toString().padStart(2, "0");
    }

    document.getElementById("siguiente")?.addEventListener("click", () => {
        turnoActual++;
        actualizarTurnoDisplay();
    }
    );

    document.getElementById("anterior")?.addEventListener("click", () => {
        turnoActual--;
        actualizarTurnoDisplay();
    }
    );

    document.getElementById("reset")?.addEventListener("click", () => {
        turnoActual = 1;
        actualizarTurnoDisplay();
    }
    );

    document.getElementById("cambiar-turno")?.addEventListener("click", () => {
        const inputTurno = document.getElementById("input-turno") as HTMLInputElement;
        const nuevoTurno = parseInt(inputTurno.value, 10);
        if (!isNaN(nuevoTurno)) {
            turnoActual = nuevoTurno;
            actualizarTurnoDisplay();
        }
    }
    );

    actualizarTurnoDisplay();