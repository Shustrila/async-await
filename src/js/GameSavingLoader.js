import readGameSaving from './readGameSaving';
import GameSavingData from './GameSavingData';

export default class GameSavingLoader {
  static async load() {
    try {
      return new GameSavingData(await readGameSaving()).json();
    } catch (e) {
      throw new TypeError(e);
    }
  }
}
