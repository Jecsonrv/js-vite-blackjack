export const crearCarta = (carta, turno) => {
    if

    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`; // 3H, JD
    imgCarta.classList.add("carta");
    divCartasJugadores[turno].append(imgCarta);
};