import getBuffer from '../js/getBuffer';

export default class ArrayBufferConverter {
  constructor() {
    this.data = undefined;
    this.buffer = 0;
  }

  load() {
    this.buffer = getBuffer(this.data);
    return this.buffer;
  }

  toString() {
    return String.fromCharCode(...new Uint16Array(this.buffer));
  }
}
