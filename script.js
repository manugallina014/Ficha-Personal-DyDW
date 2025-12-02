// 1. Busco el botón en el HTML
const boton = document.getElementById('theme-toggle');
const icono = boton.querySelector('.icon');

// 2. Función que cambia el tema
function cambiarTema() {
    // Pregunto si está en modo oscuro
    const estaOscuro = document.documentElement.getAttribute('data-theme') === 'dark';
    
    if (estaOscuro) {
        // Si está oscuro, lo paso a claro
        document.documentElement.removeAttribute('data-theme');
        icono.textContent = '🌙';
        localStorage.setItem('tema', 'claro');
    } else {
        // Si está claro, lo paso a oscuro
        document.documentElement.setAttribute('data-theme', 'dark');
        icono.textContent = '☀️';
        localStorage.setItem('tema', 'oscuro');
    }
}

// 3. Cuando hago click en el botón, cambio el tema
boton.addEventListener('click', cambiarTema);

// 4. Cuando carga la página, verifico si había guardado un tema antes
window.addEventListener('load', function() {
    const temaGuardado = localStorage.getItem('tema');
    
    if (temaGuardado === 'oscuro') {
        document.documentElement.setAttribute('data-theme', 'dark');
        icono.textContent = '☀️';
    }
});