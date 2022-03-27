import 'mocha';
import {expect} from 'chai';
import {Cifrado} from '../../src/ejercicio-3/Cifrado';

const Cif1 = new Cifrado('HOLAESTOESUNAPRUEBA', 'CLAVE');
const Cif2 = new Cifrado('KAMWJVFPAXXYBMWXPCW', 'CLAVE');
const Cif3 = new Cifrado('12345', '2', '1234567890');
const Cif4 = new Cifrado('123', '456', '1234567890');
describe('Tests de Cifrado', () => {
  it('code', () => {
    expect(Cif1.code()).to.be.equal('KAMWJVFPAXXYBMWXPCW');
  });
  it('uncode', () => {
    expect(Cif2.uncode()).to.be.equal('HOLAESTOESUNAPRUEBA');
  });
  it('number', () => {
    expect(Cif3.code()).to.be.equal('34567');
  });
  it('key length = message length', () => {
    expect(Cif4.code()).to.be.equal('579');
  });
});
