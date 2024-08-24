export default class ErrorRepository {
  constructor() {
    this.errors = new Map();

    this.errors.set(404, 'Не найдено');
  }

  translate(code) {
    if (!this.errors.has(code)) {
      return 'Unknown error';
    }
    return this.errors.get(code);
  }
}
