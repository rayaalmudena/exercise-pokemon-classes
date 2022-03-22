// Construye la clase Pokemon
// https://pokemondb.net/pokedex/all

/**
 * Un pokemon tiene las siguientes características:
 * 
 * - Un identificador único
 * - Un nombre
 * - Tipo de pokemon (fuego, agua, etc). ¡Puede ser más de un tipo!
 * - Vida máxima
 * - Poder de ataque
 * - Poder de defensa
 * 
 * Define el constructor de esta clase.
 */

class Pokemon {
    constructor(id, nombre, tipo, vidaMax, ataque, defensa) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.vidaMax = vidaMax;
        this.ataque = ataque;
        this.defensa = defensa;
    }
}

// TEST----
let pokemon = new Pokemon(890, "Eternatus", ['Poison', 'Dragon'], 255, 115, 250)
console.log(pokemon)
