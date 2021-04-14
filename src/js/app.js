import GameSaving from './GameSaving';
import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then((saving) => { GameSaving(saving); }, (error) => error);
(async () => {
  try {
    return GameSavingLoader.load();
  } catch (err) {
    return Promise.reject(err);
  }
})();
