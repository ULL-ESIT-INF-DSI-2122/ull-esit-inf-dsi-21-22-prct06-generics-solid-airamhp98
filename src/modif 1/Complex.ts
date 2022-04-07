
/* eslint-disable max-len */
import {Arithmeticable} from "./Arithmeticable";
class Complex implements Arithmeticable<Complex> {
  private num1Real:number;
  private num2Imagin:number;
  constructor(real:number, imagin:number) {
    this.num1Real = real;
    this.num2Imagin = imagin;
  }
  add(a: Complex) {
    return new Complex((a.num1Real+this.num1Real), (a.num2Imagin+this.num2Imagin));
  }
  substract(a: Complex) {
    return new Complex((a.num1Real-this.num1Real), (a.num2Imagin-this.num2Imagin));
  }
  multiply(a: Complex) {
    return new Complex((a.num1Real*this.num1Real), (a.num2Imagin*this.num2Imagin));
  }
  divide(a: Complex) {
    return new Complex((a.num1Real/this.num1Real), (a.num2Imagin/this.num2Imagin));
  }
  print() {
    console.log(this.num1Real);
    console.log(this.num2Imagin);
  }
}

const a = new Complex(2, 3);
const b = new Complex(4, 5);

a.add(b).print();
a.substract(b).print();
a.divide(b).print();
a.multiply(b).print();
