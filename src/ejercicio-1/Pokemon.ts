/* eslint-disable max-len */
import {stats} from "./Fighter";
import {Fighter} from "./Fighter";

export class Pokemon extends Fighter {
  constructor(name: string, weight:number, height: number, stats: stats, phrase: string, type?: string | undefined) {
    super(name, weight, height, stats, "pokemon", phrase, type);
  }
}

