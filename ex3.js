/**
 * Los pokemons puedes realizar un ataque especial cada cierto tiempo.
 * Implementa un nuevo método de nombre "ataqueEspecial". 
 * 
 * Modifica el constructor para que ahora podamos pasarle otro parámetro que es un OBJETO. Dicho objeto tiene dos propiedades. Por ejemplo: 
 * 
 * {
 *   especial: "Hoja afilada",
 *   incremento: 1.5
 * }
 *  
 * Implementa un nuevo método además de nombre "ataqueEspecial". 
 * Este método de momento hará exactamente lo msimo que el método "ataque"; pero multiplica el daño producido por el valor de la propiedad 'incremento'
 * 
 * PIENSA BIEN como puedes reprovechar el método "atacar" para modificarlo de tal manera que ahora tenga en cuenta el modificador 'incremento'
 */

 class Pokemon {
    constructor(id, nombre, tipos, vida, ataque, defensa, especial){
        this.id = id
        this.nombre = nombre
        this.tipos = tipos
        this.vida = vida
        this.ataque = ataque
        this.defensa = defensa
        this.especial=especial
    }
    atacar(PokemonB){
        let daño = Math.floor(Math.random() * (this.ataque - 0 + 1)) + 0;
        let defensaPokemonB =  Math.floor(Math.random() * (PokemonB.defensa - 0 + 1)) + 0;
        let dañoCausado = daño-defensaPokemonB;

        console.log("Daño Pokemon A:",daño,"Defensa Pokemon B:",defensaPokemonB,"Daño calculado:",dañoCausado);

        console.log("Tiene esta vida antes:",PokemonB.vida);
        if(dañoCausado>0){            
            PokemonB.vida=PokemonB.vida-dañoCausado;
            console.log("Tiene esta vida ahora:",PokemonB.vida);
        }else{
            console.log("Daño bloqueado");
        }
    }
    ataqueEspecial(PokemonB){
        let daño = Math.floor(Math.random() * (this.ataque - 0 + 1)) + 0;
        let defensaPokemonB =  Math.floor(Math.random() * (PokemonB.defensa - 0 + 1)) + 0;
        let dañoCausado = (daño*this.especial.incremento)-defensaPokemonB;
        
        console.log("Daño Especial Pokemon A:",daño,"Defensa Pokemon B:",defensaPokemonB,"Daño calculado:",dañoCausado);

        console.log("Tiene esta vida antes:",PokemonB.vida);
        if(dañoCausado>0){            
            PokemonB.vida=PokemonB.vida-dañoCausado;
            console.log("Tiene esta vida ahora:",PokemonB.vida);
        }else{
            console.log("Daño bloqueado");
        }
    }

}



let bulbasaur = new Pokemon(1, "Bulbasaur", ['Grass', 'Poison'], 45, 49, 49, { especial: "Hoja afilada", incremento: 1.5 });
let squirtle = new Pokemon(1, "Squirtle", ['Water'], 44, 48, 65, { especial: "Lluvioso", incremento: 1 });

//bulbasaur.atacar(squirtle);
bulbasaur.ataqueEspecial(squirtle);



