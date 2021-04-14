import read from './reader';

import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const value = await json(data);
      return new GameSaving(value);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}
