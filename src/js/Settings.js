export default class Settings {
  constructor() {
    this._settings = new Map();
    this._settings.set('theme', 'dark');
    this._settings.set('music', 'trance');
    this._settings.set('difficulty', 'easy');
  }

  set settings(entries) {
    this._settings.set(entries.key, entries.value);
  }

  get settings() {
    return this._settings;
  }
}
