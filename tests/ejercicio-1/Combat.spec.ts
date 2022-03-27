import 'mocha';
import {expect} from 'chai';
import {Marvel} from '../../src/ejercicio-1/Marvel';
import {Pokemon} from '../../src/ejercicio-1/Pokemon';
import {DC} from '../../src/ejercicio-1/Dc';
import {Combat} from '../../src/ejercicio-1/Combat';

const Poke1 = new Pokemon("Squirtle", 9, 0.5, {attack: 48, defense: 65, speed: 43, hp: 44}, "squerou", "water");
const Poke2 = new Pokemon("Bulbasaur", 7, 0.7, {attack: 49, defense: 49, speed: 45, hp: 45}, "Saur", "grass");
const Poke3 = new Pokemon("Charmander", 8.5, 0.6, {attack: 52, defense: 43, speed: 65, hp: 39}, "Char", "fire");
const Poke4 = new Pokemon("Pikachu", 6, 0.5, {attack: 55, defense: 40, speed: 90, hp: 35}, "Pika", "electric");
const Poke5 = new Pokemon("Vulpix", 9, 0.6, {attack: 41, defense: 40, speed: 65, hp: 38}, "Char", "fire");
const Marvel1 = new Marvel("Thor", 120, 2, {attack: 90, defense: 90, speed: 40, hp: 100}, "Hoy no planeo morir");
const Marvel2 = new Marvel("Hulk", 1000, 10, {attack: 900, defense: 90, speed: 40, hp: 1000}, "Hulk aplasta");
const Dc1 = new DC("Batman", 100, 1.8, {attack: 90, defense: 55, speed: 110, hp: 80}, "Soy Batman");
const combate1W = new Combat(Poke1, Poke2);
const combate2W= new Combat(Poke1, Poke3);
const combate3W = new Combat(Poke1, Poke4);
const combate1G = new Combat(Poke2, Poke1);
const combate2G = new Combat(Poke2, Poke3);
const combate3G = new Combat(Poke2, Poke4);
const combate1F = new Combat(Poke3, Poke1);
const combate2F = new Combat(Poke3, Poke2);
const combate3F = new Combat(Poke3, Poke4);
const combate1E = new Combat(Poke4, Poke1);
const combate2E = new Combat(Poke4, Poke2);
const combate3E = new Combat(Poke4, Poke3);
const combate1MarvelvMarvel = new Combat(Marvel1, Marvel2);
const combate1MarvelvDC = new Combat(Marvel2, Dc1);
const combate2MarvelvPokemon = new Combat(Marvel2, Poke1);
const combate1DCvPokemon = new Combat(Dc1, Poke1);
const combate2DCvMarvel = new Combat(Dc1, Marvel1);
const combate1PokevsMarvel = new Combat(Poke2, Marvel1);
const combate2PokevsDC = new Combat(Poke2, Dc1);
const combatePokevsPoke = new Combat(Poke5, Poke3);
describe('Combat test', () => {
  it('Combates de agua vs all', () => {
    expect(combate1W.start()).to.be.equal(Poke2);
    expect(combate2W.start()).to.be.equal(Poke1);
    expect(combate3W.start()).to.be.equal(Poke4);
  });
  it('Combates de planta vs all', () => {
    expect(combate1G.start()).to.be.equal(Poke2);
    expect(combate2G.start()).to.be.equal(Poke3);
    expect(combate3G.start()).to.be.equal(Poke2);
  });
  it('Combates de fuego vs all', () => {
    expect(combate1F.start()).to.be.equal(Poke1);
    expect(combate2F.start()).to.be.equal(Poke3);
    expect(combate3F.start()).to.be.equal(Poke3);
  });
  it('Combates de electrico vs all', () => {
    expect(combate1E.start()).to.be.equal(Poke4);
    expect(combate2E.start()).to.be.equal(Poke4);
    expect(combate3E.start()).to.be.equal(Poke4);
  });
  it('Combates de mismo universo', () => {
    expect(combate1MarvelvMarvel.start()).to.be.equal(Marvel2);
  });
  it('Combates de Marvel', () => {
    expect(combate1MarvelvDC.start()).to.be.equal(Marvel2);
    expect(combate2MarvelvPokemon.start()).to.be.equal(Marvel2);
  });
  it('Combates de Marvel', () => {
    expect(combate1DCvPokemon.start()).to.be.equal(Dc1);
    expect(combate2DCvMarvel.start()).to.be.equal(Marvel1);
  });
  it('Combates de Pokemon', () => {
    expect(combate1PokevsMarvel.start()).to.be.equal(Marvel1);
    expect(combate2PokevsDC.start()).to.be.equal(Dc1);
    expect(combatePokevsPoke.start()).to.be.equal(Poke5);
  });
});
