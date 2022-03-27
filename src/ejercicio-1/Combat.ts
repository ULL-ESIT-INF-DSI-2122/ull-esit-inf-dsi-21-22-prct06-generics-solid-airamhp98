
/* eslint-disable max-len */
import {Fighter} from "./Fighter";

/**
 * clase Combat que simula un combate entre dos luchadores
 */
export class Combat<T extends Fighter, L extends Fighter> {
  private Fighter1:T;
  private Fighter2:L;
  constructor(Fighter1: T, Fighter2:L) {
    this.Fighter1 = Fighter1;
    this.Fighter2 = Fighter2;
  }
  /**
 * Metodo start que comienza la simulacion del combate
 * @returns un luchador, el cual es el ganador del mismo.
 */
  start():Fighter|undefined {
    const Fighter1Type = this.Fighter1.getType();
    const Fighter2Type = this.Fighter2.getType();
    let efficiency1: number = 1;
    let efficiency2: number = 1;
    if (this.Fighter1.getUniverse() === this.Fighter2.getUniverse()) {
      if (Fighter1Type === Fighter2Type) {
        efficiency1 = 0.5;
        efficiency2 = 0.5;
      } else {
        switch (Fighter1Type) {
          case 'water':
            switch (Fighter2Type) {
              case 'fire':
                efficiency1 = 2;
                efficiency2 = 0.5;
                break;

              case 'grass':
                efficiency1 = 0.5;
                efficiency2 = 2;
                break;

              case 'electric':
                efficiency1 = 0.5;
                efficiency2 = 2;
                break;
            }
            break;

          case 'fire':
            switch (Fighter2Type) {
              case 'water':
                efficiency1 = 0.5;
                efficiency2 = 2;
                break;

              case 'grass':
                efficiency1 = 2;
                efficiency2 = 0.5;
                break;

              case 'electric':
                efficiency1 = 1;
                efficiency2 = 1;
                break;
            }
            break;

          case 'grass':
            switch (Fighter2Type) {
              case 'fire':
                efficiency1 = 0.5;
                efficiency2 = 2;
                break;

              case 'water':
                efficiency1 = 2;
                efficiency2 = 0.5;
                break;

              case 'electric':
                efficiency1 = 1;
                efficiency2 = 1;
                break;
            }
            break;

          case 'electric':
            switch (Fighter2Type) {
              case 'fire':
                efficiency1 = 1;
                efficiency2 = 1;
                break;

              case 'water':
                efficiency1 = 2;
                efficiency2 = 0.5;
                break;

              case 'grass':
                efficiency1 = 1;
                efficiency2 = 1;
                break;
            }
            break;
        }
      }
    } else {
      switch (this.Fighter1.getUniverse()) {
        case 'pokemon':
          switch (this.Fighter2.getUniverse()) {
            case 'marvel':
              efficiency1 = 2;
              efficiency2 = 0.5;
              break;
            case 'DC':
              efficiency1 = 0.5;
              efficiency2 = 2;
              break;
          }
          break;
        case 'marvel':
          switch (this.Fighter2.getUniverse()) {
            case 'pokemon':
              efficiency1 = 0.5;
              efficiency2 = 2;
              break;
            case 'DC':
              efficiency1 = 2;
              efficiency2 = 0.5;
              break;
          }
        case 'DC':
          switch (this.Fighter2.getUniverse()) {
            case 'pokemon':
              efficiency1 = 2;
              efficiency2 = 0.5;
              break;
            case 'marvel':
              efficiency1 = 0.5;
              efficiency2 = 2;
              break;
          }
      }
    }

    const Fighter1Hit:number = Math.round((50* (this.Fighter1.getStats().attack / this.Fighter2.getStats().defense) * efficiency1));
    const Fighter2Hit:number = Math.round((50* (this.Fighter2.getStats().attack / this.Fighter1.getStats().defense) * efficiency2));
    const hp1 = this.Fighter1.getStats().hp;
    const hp2 = this.Fighter2.getStats().hp;
    while (this.Fighter1.getStats().hp > 0 && this.Fighter2.getStats().hp > 0) {
      console.log(':D');
      this.Fighter2.setHp(this.Fighter2.getStats().hp - Fighter1Hit);
      console.log(this.Fighter1.getName() + " golpea a " + this.Fighter2.getName() + " le quita " + Fighter1Hit);
      console.log(this.Fighter1.getPhrase());
      console.log("Al luchador " + this.Fighter2.getName() + " le quedan " + this.Fighter2.getStats().hp + " puntos de vida");

      if (this.Fighter2.getStats().hp <= 0 ) {
        console.log(this.Fighter2.getName() + " ha sido debilitado");
        this.Fighter1.setHp(hp1);
        this.Fighter2.setHp(hp2);
        return this.Fighter1;
      }

      this.Fighter1.setHp(this.Fighter1.getStats().hp - Fighter2Hit);
      console.log(this.Fighter2.getName() + " golpea a " + this.Fighter1.getName() + " le quita " + Fighter2Hit);
      console.log(this.Fighter2.getPhrase());
      console.log("Al luchador " + this.Fighter1.getName() + " le quedan " + this.Fighter1.getStats().hp + " puntos de vida");

      if (this.Fighter1.getStats().hp <= 0 ) {
        console.log(this.Fighter1.getName() + " ha sido debilitado");
        this.Fighter1.setHp(hp1);
        this.Fighter2.setHp(hp2);
        return this.Fighter2;
      }
    }
  }
}


