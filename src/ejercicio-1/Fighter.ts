/* eslint-disable max-len */

export type stats = {
    attack: number,
    defense: number,
    speed: number,
    hp: number,
}
export type universe = 'marvel' | 'pokemon' | 'DC';
/**
 * Clase abstracta fighter en la que se crea un luchador con sus atributos
 * y posee metodos para trabajar con los atributos del luchador en la clase combat
 */
export abstract class Fighter {
  private readonly name: string;
  private readonly weight: number;
  private readonly height: number;
  private readonly universe: universe;
  private Stats: stats;
  private readonly phrase: string;
  private readonly type:string | undefined;
  /**
   * Constructor de un Fighter
   * @param name nombre del Fighter
   * @param weight Peso del Fighter
   * @param height Altura del Fighter
   * @param stats Stats del Fighter
   * @param universe Universo del Fighter
   * @param phrase Frase característica del Fighter
   * @param type Tipo del Fighter
   */
  constructor(name: string, weight:number, height: number, stats: stats, universe: universe, phrase: string, type?: string | undefined) {
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.universe = universe;
    this.Stats = stats;
    this.phrase = phrase;
    this.type = type;
  }
  /**
   * retorna el nombre del luchador
   * @returns el nombre del luchador
   */
  getName() {
    return this.name;
  }
  /** getter del peso
   * @returns el peso del luchador
   */
  getWeight() {
    return this.weight;
  }
  /**
   * getter del universo
   * @returns el universo del luchador
   */
  getUniverse() {
    return this.universe;
  }
  /**
   * getter de la frase
   * @returns la frase del luchador
   */
  getPhrase() {
    return this.phrase;
  }
  /**
   * getter de la altura
   * @returns la altura del luchador
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


