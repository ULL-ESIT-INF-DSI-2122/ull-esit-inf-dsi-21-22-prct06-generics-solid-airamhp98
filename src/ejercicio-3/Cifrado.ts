/**
 * Clase Cifrado encargada de Cifrar o descifrar mediante el cifrado cesar
 */
export class Cifrado {
  private alphabet:string = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
  private key:string;
  private message:string;
  /**
 * Constructor
 * @param message mensaje que queremos cifrar/descifrar
 * @param key clave que utilizaremos para el cifrado/descifrado
 * @param alphabet alfabeto que se utilizará, opcional
 */
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
  /**
   * Metodo encargado del cifrado
   * @returns devuelve el mensaje cifrado
   */
  code():string {
    let result:string = '';
    for (let i = 0; i<this.message.length; i++) {
      result+= this.alphabet[(this.alphabet.indexOf(this.message[i])+this.alphabet.indexOf(this.key[i])+1)%this.alphabet.length];
    };
    return result;
  }
  /**
   * Metodo encargado del descifrado
   * @returns devuelve el mensaje descifrado
   */
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

