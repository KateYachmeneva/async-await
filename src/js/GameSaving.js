export default class GameSaving {
  constructor(dataJson) {
    const data = JSON.parse(dataJson);
    this.id = data.id;
    this.created = data.created;
    this.userInfo = {
      id: data.userInfo.id,
      name: data.userInfo.name,
      level: data.userInfo.level,
      points: data.userInfo.points,
    };
  }
}
