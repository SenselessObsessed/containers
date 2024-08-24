import Character from './js/Character';
import ErrorRepository from './js/ErrorRepository';
import Settings from './js/Settings';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(person) {
    if (this.members.has(person)) {
      throw new Error('Персонаж уже добавлен');
    }
    this.members.add(person);
  }

  addAll(...persons) {
    persons.forEach((person) => this.members.add(person));
  }

  toArray() {
    return [...this.members];
  }
}
