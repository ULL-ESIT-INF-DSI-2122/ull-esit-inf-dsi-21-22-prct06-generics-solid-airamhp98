import {Fighter} from "./Fighter";


export class Pokedex {
  private FighterArray: Fighter[];
  /**
   * crea una pokedex
   * @param Fighter se le pasa un numero variable de luchadores
   * y los guarda en un array de fighters
   */
  constructor(...Fighter:Fighter[]) {
    this.FighterArray = Fighter;
  }
  /**
   * Getter
   * @param index indice del array
   * @returns el luchador correspondiente al indice.
   */
  getFighter(index:number) {
    return this.FighterArray[index];
  }
}
