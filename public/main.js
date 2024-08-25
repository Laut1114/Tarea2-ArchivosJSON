const db = '../assets/data/datos.json'

const container = document.querySelector('.container');
const nombre = document.getElementById('nombre');
const casa = document.getElementById('casa');

let listaPersonajes = [];

async function getPersonajes() {
    try {
        const r = await fetch(db);
        listaPersonajes = await r.json();
    } catch (error) {
        console.log(error);
    }
};

getPersonajes().then(() => {
    listaPersonajes.map((personaje) => {
        const card = document.createElement('div');
        card.innerHTML = `<p>${personaje.id}</p><p class="nombre">${personaje.nombre}</p><p class="casa">${personaje.casa}</p>`
        card.classList.add('card');
        container.appendChild(card);
    })
});
