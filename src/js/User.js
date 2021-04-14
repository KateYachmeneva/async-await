export default class ArrayBufferConverter {
  constructor() {
    this.array = null;
  }

  load(data) {
    this.array = new Uint16Array(data);
  }

  toString() {
    const container = [];
    for (let i = 0; i < [...this.array].length; i += 1) {
      const item = String.fromCharCode(this.array[i]);

      container.push(item);
    }
    return container.join('');
  }
}
