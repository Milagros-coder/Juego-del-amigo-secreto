let amigo = [];
let sorteoRealizado = false;

//Función para agregar amigo a la lista
function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    if (!nombreAmigo) {
        mostrarAlerta("Ingresa un nombre por favor")
        return;
    }
    amigo.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    mostrarListaAmigos();
}

//Función para mostrar la lista de amigos
function mostrarListaAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

//Indice para la posición
    for(let i = 0; i < amigo.length; i++){
        let item = document.createElement("li");
        item.textContent = amigo [i];
        listaAmigos.appendChild(item);
    }
}

//Función para sortear amigos
function sortearAmigo(){
    if (amigo.length < 2){
        mostrarAlerta("Ingrese al menos 2 amigos para sortear");
        return;
    }
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML= `El amigo sorteado es:🎉🎉 ${amigoSorteado} 🎉🎉`;

// Llamamos a la alerta personalizada para mostrar el amigo sorteado
    mostrarAlerta(`El amigo sorteado es:🎉🎉 ${amigoSorteado} 🎉🎉`);

    sorteoRealizado = true;

// Deshabilitar el botón de sortear amigo después de hacerlo una vez
    document.getElementById("botonSortear").disabled = true;

//Limpiar la lista
    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
}

//Función para que la tecla ENTER ingrese un nombre
document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {  // Si la tecla presionada es Enter
        event.preventDefault();    // Evitamos que haga su acción predeterminada (como hacer un salto de línea)
        agregarAmigo();            
    }
});

// Función para reiniciar juego
function reiniciarJuego() {
    if (!sorteoRealizado) {
        mostrarAlerta("Necesitas sortear un amigo antes de reiniciar el juego!");
        return;
    }
    
    amigo = []; 

    document.getElementById("listaAmigos").innerHTML = ""; 
    document.getElementById("resultado").innerHTML = ""; 

    // Habilitar el botón de sortear nuevamente
    document.getElementById("botonSortear").disabled = false;

    // Actualizar la interfaz con la lista vacía
    mostrarListaAmigos();

    document.getElementById("amigo").focus(); // Volver a enfocar en el input

    sorteoRealizado = false; // Resetear el estado del sorteo

    console.log("El juego ha sido reiniciado.");
}

// Función para mostrar la alerta personalizada
function mostrarAlerta(mensaje) {
    let modal = document.getElementById("miAlerta");
    let mensajeAlerta = document.getElementById("mensajeAlerta");
    
    mensajeAlerta.textContent = mensaje;  
    modal.style.display = "flex";  

// Cerrar el modal cuando el usuario hace clic en el botón "Cerrar"
    document.getElementById("cerrarAlerta").addEventListener("click", function() {
        modal.style.display = "none";  // Ocultar el modal
    });
}

