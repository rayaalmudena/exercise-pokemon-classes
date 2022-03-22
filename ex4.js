/**
 * Un pokemon solo puede realizar un ataque especial cada 3 ataques normales. 
 * 
 * Modifica el constructor para guardar la información necesaria para controlar cuando es que el pokemon puede usar su ataque especial
 * 
 * Deberás modificar el método 'atacar' para que, una vez ataque normal, cuente como carga del ataque especial.
 * 
 * Y a su vez, deberás modificar 'ataqueEspecial' para que 'resetee' el contador de ataques
 * 
 * Ejemplo: https://oscarm.tinytake.com/tt/NTAxMzU3OV8xNTc3MzUwMQ
 *  
 * 
 */
class Pokemon {
    constructor(id, nombre, tipos, vida, ataque, defensa, especial) {
        this.id = id
        this.nombre = nombre
        this.tipos = tipos
        this.vida = vida
        this.ataque = ataque
        this.defensa = defensa
        this.especial = especial
        this.numAtaque = 0;
    }
    atacar(PokemonB) {
        let daño = Math.floor(Math.random() * (this.ataque - 0 + 1)) + 0;
        let defensaPokemonB = Math.floor(Math.random() * (PokemonB.defensa - 0 + 1)) + 0;
        let dañoCausado = daño - defensaPokemonB;

        console.log("Daño Pokemon A:", daño, "Defensa Pokemon B:", defensaPokemonB, "Daño calculado:", dañoCausado);

        console.log("Tiene esta vida antes:", PokemonB.vida);
        if (dañoCausado > 0) {
            PokemonB.vida = PokemonB.vida - dañoCausado;
            console.log("Tiene esta vida ahora:", PokemonB.vida);
        } else {
            console.log("Daño bloqueado");
        }
        this.numAtaque = this.numAtaque+1;
    }
    ataqueEspecial(PokemonB) {
        if (this.numAtaque == 3) {
            let daño = Math.floor(Math.random() * (this.ataque - 0 + 1)) + 0;
            let defensaPokemonB = Math.floor(Math.random() * (PokemonB.defensa - 0 + 1)) + 0;
            let dañoCausado = (daño * this.especial.incremento) - defensaPokemonB;

            console.log("Daño Especial Pokemon A:", daño, "Defensa Pokemon B:", defensaPokemonB, "Daño calculado:", dañoCausado);

            console.log("Tiene esta vida antes:", PokemonB.vida);
            if (dañoCausado > 0) {
                PokemonB.vida = PokemonB.vida - dañoCausado;
                console.log("Tiene esta vida ahora:", PokemonB.vida);
            } else {
                console.log("Daño bloqueado");
            }
            this.numAtaque = 0;
        }else{
            console.log("Ataque fallido")
        }
    }
}
let bulbasaur = new Pokemon(1, "Bulbasaur", ['Grass', 'Poison'], 45, 49, 49, { especial: "Hoja afilada", incremento: 1.5 });
let squirtle = new Pokemon(1, "Squirtle", ['Water'], 44, 48, 65, { especial: "Lluvioso", incremento: 1 });


// TESTS: El primer araque especial deberia fallar tal y como se muestra en el ejemplo!

console.log("ATAQUE Especial ========================")
bulbasaur.ataqueEspecial(squirtle)
console.log("ATAQUE 1 ========================")
bulbasaur.atacar(squirtle)
console.log("ATAQUE 2 ========================")
bulbasaur.atacar(squirtle)
console.log("ATAQUE 3 ========================")
bulbasaur.atacar(squirtle)
console.log("ATAQUE Especial ========================")
bulbasaur.ataqueEspecial(squirtle)





