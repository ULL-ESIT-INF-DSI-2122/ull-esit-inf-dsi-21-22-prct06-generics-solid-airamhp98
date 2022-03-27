/* eslint-disable max-len */

export type stats = {
    attack: number,
    defense: number,
    speed: number,
    hp: number,
}
export type universe = 'marvel' | 'pokemon' | 'DC';

export abstract class Fighter {
  private readonly name: string;
  private readonly weight: number;
  private readonly height: number;
  private readonly universe: universe;
  private readonly Stats: stats;
  private readonly phrase: string;
  private readonly type:string | undefined;
  constructor(name: string, weight:number, height: number, stats: stats, universe: universe, phrase: string, type?: string | undefined) {
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.universe = universe;
    this.Stats = stats;
    this.phrase = phrase;
    this.type = type;
  }
  getName() {
    return this.name;
  }
  /** getter del peso
   * @returns el peso del pokemon
   */
  getWeight() {
    return this.weight;
  }
  getUniverse() {
    return this.universe;
  }
  getPhrase() {}
  /**
   * getter de la altura
   * @returns altura del pokemon
   */
  getHeight() {
    return this.height;
  }
  /**
   * getter del tipo
   * @returns tipo del pokemon
   */
  getType() {
    return this.type;
  }
  /**
 * getter del segundo tipo
 * @returns segundo tipo del pokemon, argumento opcional
 */
  getStats() {
    return this.Stats;
  }
  /**
   * setter que actualiza la vida de un pokemon
   * @param hp vida a actualizar
   */
  setHp(hp:number) {
    this.Stats.hp = hp;
  }
}


