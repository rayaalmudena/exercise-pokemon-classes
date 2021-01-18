/**
 * Para aumentar el realistmo del combate, vamos a implementar las debilidades y fortalezas entre los diferentes tipos de pokemon.
 * 
 * Por ejemplo, es bien sabido que los pokemon tipo 'Grass' son fuertes contra los pokemon tipo 'Water'.
 * 
 * Implementa una CLASE NUEVA de nombre PokemonPedia. 
 * 
 * Esta clase tan solo implementa un método de clase o método estático.
 * El método toma por parámetro un tipo de pokemon (string), y devuelve para contra que tipos este es inmune, es débil o bien es fuerte. Como sugerencia de nombre del método puede ser 'obtenerSinergiasPokemon'
 * 
 * Puedes obtener los datos de aquí: https://raw.githubusercontent.com/filipekiss/pokemon-type-chart/master/types.json
 * 
 * Para no complicar mucho las cosas, copia este JSON y guardalo todo entero dentro de una variable que usarás en el mismo método estático 'obtenerSinergiasPokemon' 
 * 
 * Ejemplo de resultado: https://oscarm.tinytake.com/tt/NTAxMzU5OF8xNTc3MzY1NQ
 * 
 * Como paso final, cuando el pokemon realice el ataque especial, debe consultar la PokemonPedia. Si resulta que elpokemon que relize el ataque especial, es "fuerte" contra el pokemon objetivo, debemos multiplicar el incremento POR DOS. En caso contrario, si es un pokemon DEBIL contra el pokemon contra el que realiza el ataque, debemos multiplicar el incremento por 0.5. S
 * 
 * NOTA: Para simplicar la lógica, hemos considerado que un pokemon solo va a ser de un tipo, un array de un solo elemento. Además, no tendremos en cuenta la inmunida de los pokemon. Ten cuidado a la hora de manipular el campo "tipos"; porque no deja de ser un array de una posición.
 * 
 * Ejemplo comate y uso de PokemonPedia: https://pastebin.com/raw/rbMVZq9t
 */

 
class PokemonPedia {
    // Define aquí solamente el método estático
}

let bulbasaur = new Pokemon(1, "Bulbasaur", ['Grass'], 45, 49, 49 , {
    especial: "Hoja afilada",
    incremento: 1.5
})
let squirtle = new Pokemon(1, "Squirtle", ['Water'], 44, 48, 65, {
    especial : "Pistola agua",
    incremento: 1.65
})

// // Prueba PokemonPedia
// console.log(PokemonPedia.obtenerSinergiasPokemon('Grass'))

// // Combate
// bulbasaur.ataqueEspecial(squirtle)
// bulbasaur.atacar(squirtle)
// bulbasaur.atacar(squirtle)
// bulbasaur.atacar(squirtle)
// bulbasaur.ataqueEspecial(squirtle)

// // Combate 2
// let bulbasaur2 = new Pokemon(1, "Bulbasaur", ['Grass'], 45, 49, 49, {
//     especial: "Hoja afilada",
//     incremento: 1.5
// })
// let squirtle2 = new Pokemon(1, "Squirtle", ['Water'], 44, 48, 65, {
//     especial: "Pistola agua",
//     incremento: 1.65
// })

// // COMBATE 2
// squirtle2.atacar(bulbasaur2)
// squirtle2.atacar(bulbasaur2)
// squirtle2.atacar(bulbasaur2)
// squirtle2.ataqueEspecial(bulbasaur2)