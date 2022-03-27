import 'mocha';
import {expect} from 'chai';
import {Marvel} from '../../src/ejercicio-1/Marvel';
import {Pokemon} from '../../src/ejercicio-1/Pokemon';
import {DC} from '../../src/ejercicio-1/Dc';
import {Pokedex} from '../../src/ejercicio-1/Pokedex';
const Poke1 = new Pokemon("Squirtle", 9, 0.5, {attack: 48, defense: 65, speed: 43, hp: 44}, "squerou", "water");
const Marvel1 = new Marvel("Thor", 120, 2, {attack: 90, defense: 90, speed: 40, hp: 100}, "Hoy no planeo morir");
const Dc1 = new DC("Batman", 100, 1.8, {attack: 90, defense: 55, speed: 110, hp: 80}, "Soy Batman");
const Pokedex1 = new Pokedex(Poke1, Marvel1, Dc1);
describe('Pokedex test', () => {
  it('getFighter', () => {
    expect(Pokedex1.getFighter(1)).to.be.equal(Marvel1);
  });
});
