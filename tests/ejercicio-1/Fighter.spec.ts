import 'mocha';
import {expect} from 'chai';
import {Marvel} from '../../src/ejercicio-1/Marvel';
import {Pokemon} from '../../src/ejercicio-1/Pokemon';
import {DC} from '../../src/ejercicio-1/Dc';
const Poke1 = new Pokemon("Squirtle", 9, 0.5, {attack: 48, defense: 65, speed: 43, hp: 44}, "squerou", "water");
const Marvel1 = new Marvel("Thor", 120, 2, {attack: 90, defense: 90, speed: 40, hp: 100}, "Hoy no planeo morir");
const Dc1 = new DC("Batman", 100, 1.8, {attack: 90, defense: 55, speed: 110, hp: 80}, "Soy Batman");


describe('Fighter test', () => {
  it('getName', () => {
    expect(Poke1.getName()).to.be.equal('Squirtle');
  });
  it('getWeight', () => {
    expect(Poke1.getWeight()).to.be.equal(9);
  });
  it('getHeight', () => {
    expect(Poke1.getHeight()).to.be.equal(0.5);
  });
  it('getPhrase', () => {
    expect(Poke1.getPhrase()).to.be.equal('squerou');
  });
  it('getType', () => {
    expect(Poke1.getType()).to.be.equal('water');
  });
  it('getAttack', () => {
    expect(Marvel1.getStats().attack).to.be.equal(90);
  });
  it('getDefense', () => {
    expect(Marvel1.getStats().defense).to.be.equal(90);
  });
  it('getSpeed', () => {
    expect(Dc1.getStats().speed).to.be.equal(110);
  });
  it('getHp', () => {
    expect(Dc1.getStats().hp).to.be.equal(80);
  });
  it('getUniverse', () => {
    expect(Dc1.getUniverse()).to.be.equal('DC');
  });
  it('setHp', () => {
    Poke1.setHp(90);
    expect(Poke1.getStats().hp).to.be.equal(90);
  });
});

