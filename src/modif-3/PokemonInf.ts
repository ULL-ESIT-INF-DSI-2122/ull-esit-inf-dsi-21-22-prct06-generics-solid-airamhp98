import {Pokemon} from "./PokemonModif";
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
