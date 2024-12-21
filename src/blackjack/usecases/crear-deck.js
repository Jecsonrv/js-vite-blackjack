import _ from "underscore";

// Esta función crea un nuevo deck o baraja

/**
 *
 * @param {Array<String>} tiposDeCarta Ememplo: ["C", "D", "H", "S"]
 * @param {Array<String>} tiposEspeciales  Ejemplo : ["A", "J", "Q", "K"]
 * @returns {Array}
 */
export function crearDeck(tiposDeCarta, tiposEspeciales) {
  if (!tiposDeCarta || tiposDeCarta.length === 0)
    throw new Error("TiposDeCarta es obligatorio como un nuevo string");

  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }

  return _.shuffle(deck);
}