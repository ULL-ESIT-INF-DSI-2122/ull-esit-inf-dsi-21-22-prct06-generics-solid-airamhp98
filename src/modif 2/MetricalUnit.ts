
export type MetricalUnit = 'kilogramo' | 'gramo' | 'metricalTonelada';
/**
 * Clase MetricalMass, recibe una cantidad y una unidad
 */
export class MetricalMass {
  public Unit:number;
  public MetrMass:MetricalUnit;
  /**
   * Constructor
   * @param Unit Cantidad
   * @param MetrMass Unidad Métrica
   */
  constructor(Unit:number, MetrMass: MetricalUnit) {
    this.Unit = Unit;
    this.MetrMass = MetrMass;
  }
  /**
   * Conversor Métrico
   * @param conversor Contiene la unidad a la que se quiere llegar
   * @returns devuelve la cantidad convertida
   */
  MetricalConversor(conversor:MetricalUnit): number {
    if (this.MetrMass === 'kilogramo') {
      switch (conversor) {
        case 'kilogramo': break;
        case 'gramo': this.Unit = this.Unit*1000;
          break;
        case 'metricalTonelada': this.Unit = this.Unit/1000;
          break;
      }
    }
    if (this.MetrMass === 'gramo') {
      switch (conversor) {
        case 'kilogramo': this.Unit = this.Unit/1000;
          break;
        case 'gramo': break;
        case 'metricalTonelada': this.Unit = this.Unit/1000000;
      }
    }
    if (this.MetrMass === 'metricalTonelada') {
      switch (conversor) {
        case 'kilogramo': this.Unit = this.Unit*1000;
          break;
        case 'gramo': this.Unit = this.Unit*1000000;
          break;
        case 'metricalTonelada': break;
      }
    }
    return this.Unit;
  }
}

export type ImperialUnit = 'onza' | 'libra' | 'piedra' | 'centena' | 'imperialTonelada';

/**
 * Clase Imperial
 */
class ImperialMass {
  private Unit:number;
  private ImpMass:ImperialUnit;
  constructor(Unit:number, ImpMass: ImperialUnit) {
    this.Unit = Unit;
    this.ImpMass = ImpMass;
  }
  /**
   * Metrical Conversor
   * @param conversor Unidad imperial a la que se quiere convertir
   * @returns Cantidad convertiad
   */
  MetricalConversor(conversor:ImperialUnit): number {
    if (this.ImpMass === 'onza') {
      switch (conversor) {
        case 'onza': break;
        case 'libra': this.Unit = this.Unit/16;
          break;
        case 'piedra': this.Unit = this.Unit/224;
          break;
        case 'centena': this.Unit = this.Unit/1792;
          break;
        case 'imperialTonelada': this.Unit = this.Unit/35840;
          break;
      }
    }
    if (this.ImpMass === 'libra') {
      switch (conversor) {
        case 'onza': this.Unit = this.Unit*16;
          break;
        case 'libra':
          break;
        case 'piedra': this.Unit = this.Unit/14;
          break;
        case 'centena': this.Unit = this.Unit/112;
          break;
        case 'imperialTonelada': this.Unit = this.Unit/2240;
          break;
      }
    }
    if (this.ImpMass === 'piedra') {
      switch (conversor) {
        case 'onza': this.Unit = this.Unit*224.00;
          break;
        case 'libra': this.Unit = this.Unit*14.00;
          break;
        case 'piedra':
          break;
        case 'centena': this.Unit = this.Unit/8;
          break;
        case 'imperialTonelada': this.Unit = this.Unit/160;
          break;
      }
    }
    if (this.ImpMass === 'centena') {
      switch (conversor) {
        case 'onza': this.Unit = this.Unit*1792.00;
          break;
        case 'libra': this.Unit = this.Unit*112.00;
          break;
        case 'piedra': this.Unit = this.Unit*8;
          break;
        case 'centena':
          break;
        case 'imperialTonelada': this.Unit = this.Unit/20;
          break;
      }
    }
    if (this.ImpMass === 'imperialTonelada') {
      switch (conversor) {
        case 'onza': this.Unit = this.Unit*35840;
          break;
        case 'libra': this.Unit = this.Unit*2240.00;
          break;
        case 'piedra': this.Unit = this.Unit*160;
          break;
        case 'centena': this.Unit = this.Unit*20;
          break;
        case 'imperialTonelada':
          break;
      }
    }
    return this.Unit;
  }
}

class Adapter extends MetricalMass {
  constructor(private conversor: ImperialMass, Metrical:MetricalMass) {
    super(Metrical.Unit, Metrical.MetrMass);
  }
}

const Metrical1 = new MetricalMass(1, 'kilogramo');
const Imperial1 = new ImperialMass(3, 'centena');
const adapter = new Adapter(Imperial1, Metrical1);
// adapter.Conversor();
