
/* eslint-disable max-len */
import {Pokemon} from "./Pokemon";
import {DC} from "./Dc";
import {Fighter} from "./Fighter";
import {Marvel} from "./Marvel";
/**
 * clase Combat que simula un combate entre dos pokemons
 */
export class Combat<T extends Fighter, L extends Fighter> {
  private Fighter1:T;
  private Fighter2:L;
  constructor(Fighter1: T, Fighter2:L) {
    this.Fighter1 = Fighter1;
    this.Fighter2 = Fighter2;
  }

  start():Fighter|undefined {
    const Fighter1Type = this.Fighter1.getType();
    const Fighter2Type = this.Fighter2.getType();
    const Fighter1Stats = this.Fighter1.getStats();
    const Fighter2Stats = this.Fighter2.getStats();
    let efficiency1: number = 1;
    let efficiency2: number = 1;
    // Marvel>DC>Pokemon>Marvel si los dos luchadores son pokemons codigo viejo, si son del mismo universo efectividad =0.5
    if (this.Fighter1.getUniverse() === this.Fighter2.getUniverse()) {
      // si los dos luchadores son del mismo universo

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
      const Fighter1Hit:number = Math.round((50* (Fighter1Stats.attack / Fighter2Stats.defense) * efficiency1));
      const Fighter2Hit:number = Math.round((50* (Fighter2Stats.attack / Fighter1Stats.defense) * efficiency2));

      while (Fighter1Stats.hp > 0 || Fighter2Stats.hp > 0) {
        this.Fighter2.setHp(Fighter2Stats.hp - Fighter1Hit);
        console.log(this.Fighter1.getName() + " golpea a " + this.Fighter2.getName() + " le quita " + Fighter1Hit);
        console.log(this.Fighter1.getPhrase());
        console.log("Al luchador " + this.Fighter2.getName() + " le quedan " + this.Fighter2.getStats().hp + " puntos de vida");

        if (this.Fighter2.getStats().hp <= 0 ) {
          console.log(this.Fighter2.getName() + " ha sido debilitado");
          return this.Fighter1;
        } // check pokemon 2 vida

        this.Fighter1.setHp(Fighter1Stats.hp - Fighter2Hit);
        console.log(this.Fighter2.getName() + " golpea a " + this.Fighter1.getName() + " le quita " + Fighter2Hit);
        console.log(this.Fighter2.getPhrase());
        console.log("Al luchador " + this.Fighter1.getName() + " le quedan " + this.Fighter1.getStats().hp + " puntos de vida");

        if (this.Fighter1.getStats().hp <= 0 ) {
          console.log(this.Fighter1.getName() + " ha sido debilitado");
          return this.Fighter2;
        }
      }
    }
  }
}


// console.log(Pokedex1.getPokemon(0));


