
/**
 * declaracion de tipo stats, estadisticas correspondientes a un
 * pokemon, con ataque, defensa, vida y velocidad
 */
export type stats = {
    attack: number,
    defense: number,
    speed: number,
    hp: number,
}
/**
 * Interfaz que implementaremos en Pokemon
 */
export interface PokeInterface {
getName():string;
getStats():stats;
getType():string;
}

/**
 * la clase pokemon tiene como atributos privados el nombre, tipo y estadisticas
 * adicionalmente
 */
export class Pokemon implements PokeInterface {
  private name: string;
  private type: string;
  private pokeStats: stats;
  /**
 *crea un pokemon
 * @param name nombre
 * @param poke_stats estadisticas
 * @param type tipo del pokemon
 */
  constructor(name: string, type: string, pokeStats: stats) {
    this.name = name;
    this.type = type;
    this.pokeStats = pokeStats;
  }
  /**
   * getter de nombre
   * @returns nombre del pokemon
   */
  getName() {
    return this.name;
  }
  /**
   * getter del type
   * @returns el tipo
   */
  getType() {
    return this.type;
  }
  /**
   * getter del ataque
   * @returns ataque
   */
  getStatsAttack() {
    return this.pokeStats.attack;
  }
  /**
   * getter de la defensa
   * @returns la defensa del pokemon
   */
  getStatsDefense() {
    return this.pokeStats.defense;
  }
  /**
   * getter de la velocidad
   * @returns velocidad del pokemon
   */
  getStatsSpeed() {
    return this.pokeStats.speed;
  }
  /**
   * getter de la HP
   * @returns vida
   */
  getStatsHP() {
    return this.pokeStats.hp;
  }
  /**
   * getter de las stats
   * @returns stats
   */
  getStats(): stats {
    return this.pokeStats;
  }
}

/**
 * Esta clase declara factory method que retorna un Pokemon.
 * Las subclases implementarán este método.
 */
export abstract class PokemonInf {
    public abstract factoryMethod():Pokemon
    /**
     * logic obtiene la info del objeto retornado por factory method
     * @returns
     */
    public logic(): string {
      const Poke = this.factoryMethod();
      return `I am a ${Poke.getName()}, ` +
               `I am ${Poke.getType()} and ` +
               `my stats are ${Poke.getStatsAttack()} attack ${Poke.getStatsDefense()} defense, hp ${Poke.getStatsHP()}`;
    }
}
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
