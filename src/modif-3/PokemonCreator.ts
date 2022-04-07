import {Pokemon} from "./PokemonModif";
import {PokemonInf} from "./PokemonModif";
import {stats} from "./PokemonModif";
/**
 * Implementacion de PokemonInf que devuelve Pokemons a partir de factoryMethod
 */
export class PokemonCreator extends PokemonInf {
  constructor(private name:string, private type:string, private stats:stats) {
    super();
  }
  public factoryMethod(): Pokemon {
    return new Pokemon(this.name, this.type, this.stats);
  }
}

/**
   * Client code trabaja con una instancia de PokemonCreator
   * @param PokemonInf
   */
function clientCode(PokemonInf:PokemonInf) {
  console.log(PokemonInf.logic());
}

clientCode(new PokemonCreator("Squirtle", "water", {attack: 48, defense: 65, speed: 43, hp: 44}));
clientCode(new PokemonCreator("Bulbasaur", "grass", {attack: 49, defense: 49, speed: 45, hp: 45}));
clientCode(new PokemonCreator("Raichu", "electric", {attack: 90, defense: 55, speed: 110, hp: 60}));

