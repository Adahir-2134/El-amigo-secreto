// Array para almacenar los nombres de los amigos
let amigos = [];

//usamos la sentencia event.key para usar la tecla enter
document.getElementById("amigo").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evita que el formulario se envíe (si lo hubiera)
        agregarAmigo();
    }
});

// Función para agregar amigos al array y mostrarlos en la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

// Función para actualizar la lista
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌";
        botonEliminar.onclick = () => eliminarAmigo(index);
        li.appendChild(botonEliminar);
        lista.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

// Función para sortear UN solo nombre aleatorio
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 participantes para sortear.");
        return;
    }

    let ganador = amigos[Math.floor(Math.random() * amigos.length)];
    mostrarResultado(ganador);
}

// Función para mostrar el resultado
function mostrarResultado(ganador) {
    let resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `🎉 El amigo secreto es: <strong>${ganador}</strong> 🎉`;
}
/*Codigo hecho por Adahir Linares para Alura Latam&Oracle 2025 */