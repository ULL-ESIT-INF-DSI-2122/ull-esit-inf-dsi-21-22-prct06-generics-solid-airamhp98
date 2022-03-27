# INFORME PRÁCTICA 6
## ASIGNATURA: Desarrollo de Sistemas Informáticos
## Grado en Ingeniería Informática ULL

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-airamhp98/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-airamhp98?branch=main)

Una vez realizadas las tareas previas, comenzamos con la realización de los ejercicios propuestos para esta práctica. 

### Ejercicio 1 - El combate definitivo
**Objetivo:** Se pide, partiendo del ejercicio realizado en la práctica 5, incluir nuevos personajes de diferentes universos, para ello nos piden desarrollar una clase **abstracta** la cual será la **superclase** del resto de clases de los luchadores, una clase Combat que permita que luchen luchadores de cualquier universo y la clase Pokedex que almacene luchadores.

A continuación, explicaré el código desarrollado, comenzando por dicha superclase:
```ts
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
  getWeight() {
    return this.weight;
  }

  getUniverse() {
    return this.universe;
  }
  getPhrase() {
    return this.phrase;
  }
  getHeight() {
    return this.height;
  }
  getType() {
    return this.type;
  }
  getStats() {
    return this.Stats;
  }
  setHp(hp:number) {
    this.Stats.hp = hp;
  }
}


```
**Explicación del código desarrollado:**
Se declaran dos tipos, stats y universe que se utilizarán en los atributos privados de los luchadores, stats y universe. stats son las estadísticas de los luchadores, y universe los diferentes universos soportados. La clase abstracta Figther posee los atributos de forma privada y solo lectura, para que no sean modificados excepto Stats. El constructor inicializa estos atributos. Adicionalmente se implementan getters de estos atributos y seter para modificar la vida.
A continuación mostramos el código de las clases que heredan los atributos de Fighter.
DC:
```ts
import {stats} from "./Fighter";
import {Fighter} from "./Fighter";
/**
 * Clase DC que extiende la clase Fighter
 */
export class DC extends Fighter {
  constructor(name: string, weight:number, height: number, stats: stats, phrase: string, type?: string | undefined) {
    super(name, weight, height, stats, "DC", phrase, type);
  }
}

```
Marvel:
```ts
import {stats} from "./Fighter";
import {Fighter} from "./Fighter";

/**
 * Clase Marvel que extiende la clase Fighter
 */
export class Marvel extends Fighter {
  constructor(name: string, weight:number, height: number, stats: stats, phrase: string, type?: string | undefined) {
    super(name, weight, height, stats, "marvel", phrase, type);
  }
}

```
Pokemon, esta última emplea el parámetro opcional type.

```ts
import {stats} from "./Fighter";
import {Fighter} from "./Fighter";

/**
 * Clase Pokemon que extiende Fighter
 */
export class Pokemon extends Fighter {
  constructor(name: string, weight:number, height: number, stats: stats, phrase: string, type?: string | undefined) {
    super(name, weight, height, stats, "pokemon", phrase, type);
  }
}
```
A continuación, se muestra el código de la clase Pokedex:

```ts
import {Fighter} from "./Fighter";


export class Pokedex {
  private FighterArray: Fighter[];

  constructor(...Fighter:Fighter[]) {
    this.FighterArray = Fighter;
  }

  getFighter(index:number) {
    return this.FighterArray[index];
  }
}
```
**Explicación del código desarrollado:**
Esta clase, solamente posee un constructor y un método getFighter. El constructor crea un Array de luchadores que se le pasa como parámetro y el getter devuelve el luchador que se encuentra en la posición del índice que se le pasa.
Para finalizar, explicaremos la clase combate:

```ts

import {Fighter} from "./Fighter";

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
```
**Explicación del código desarrollado:**
Esta clase, es la más extensa, consiste en crear un combate en el constructor al cual se le pasan 2 luchadores, estos, los guardo como atributos privados.Se inicializan las variables que se emplearan, y se comienza comprobando si ambos luchadores son del mismo universo, en caso de serlo, se comprueba si el tipo de estos luchadores es el mismo, realmente útil puesto que los luchadores externos a Pokemon, tendrán el tipo undefined, en caso de ser Pokemons esto nos vale para comprobar si se trata de pokemons del mismo tipo, en ambos casos, la eficiencia es 0.5, en caso de que los tipos no sean iguales, significaría que ambos luchadores son pokemons y se calcularía la eficiencia siguiendo el ejercicio desarrollado en la práctica anterior mediante switch cases seteariamos el valor de ambas eficiencias. En el caso de que los luchadores no fueran del mismo universo, entraríamos en el else y mediante switch cases seguriamos el siguiente "piedra papel tijera":  Marvel>DC>Pokemon>Marvel.
Posteriormente se calcula el hit de ambos fighters con la fórmula y las eficiencias seteadas, y pasaríamos a la impresión por pantalla y setear la vida hasta que uno de los dos se debilite y se retorne el ganador.

### Ejercicio 2- DSIFlix
No lo he desarrollado. He estado muy enfermo esta semana y no me ha dado tiempo.

### Ejercicio 3- El cifrado indescifrable
**Objetivo:** Crear una clase Cifrado que implemente operaciones de codificación y decodificación ante un alfabeto y clave arbitrario.

```ts
**
 * Clase Cifrado encargada de Cifrar o descifrar mediante el cifrado cesar
 */
export class Cifrado {
  private alphabet:string = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
  private key:string;
  private message:string;

  constructor(message:string, key:string, alphabet?:string) {
    if (alphabet !== undefined) this.alphabet = alphabet;
    if (key.length == message.length) this.key = key;
    else {
      for (let j =0; key.length<=message.length; j++) {
        key += key[j];
      }
      this.key = key;
    }
    this.message = message;
  }

  code():string {
    let result:string = '';
    for (let i = 0; i<this.message.length; i++) {
      result+= this.alphabet[(this.alphabet.indexOf(this.message[i])+this.alphabet.indexOf(this.key[i])+1)%this.alphabet.length];
    };
    return result;
  }

  uncode():string {
    let result:string = '';
    for (let i = 0; i<this.message.length; i++) {
      if (this.alphabet.indexOf(this.message[i])>=(this.alphabet.indexOf(this.key[i]))) {
        result+= this.alphabet[(this.alphabet.indexOf(this.message[i])-this.alphabet.indexOf(this.key[i])-1)%this.alphabet.length];
      } else result+= this.alphabet[(this.alphabet.indexOf(this.message[i])-this.alphabet.indexOf(this.key[i])-1)+this.alphabet.length];
    };
    return result;
  }
}

```
**Explicación del código desarrollado:**
Se implementa una clase Cifrado, cuyo constructor recibe un mensaje y una clave, opcionalmente un alfabeto, en caso de no recibir ninguno, utilizariamos el alfabeto por defecto 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ', a continuación comprobamos si la longitud de la key es igual que la del mensaje y en caso afirmativo la guardamos y si no, repetimos la clave hasta que tenga la misma longitud que el mensaje.
**método code()** este método es el encargado en desarrollar el cifrado, se trata de un bucle for de tantos ciclos como la longitud del mensaje que recorre letra a letra del mensaje y de la key y suma la posición en el alfabeto de ambas para hallar la letra cifrada. Por último nos retorna el resultado, el cual se trata de un string.
**método uncode()** este método es el encargado de descifrar un mensaje empleando la key dada, hacemos lo mismo que en el anterior, pero esta vez restamos las posiciones, en vez de sumarla y si la posición de la letra del mensaje es menor que la de la key le sumamos la longitud del alfabeto, evitando la posición negativa. Nos retorna el resultado en un string.
