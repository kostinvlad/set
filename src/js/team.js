export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(newCharacter) {
    if (this.members.has(newCharacter)) {
      throw new Error('Персонаж уже существует');
    } else {
      this.members.add(newCharacter);
    }
  }

  addAll(...newCharacters) {
    newCharacters.forEach((item) => {
      this.members.add(item);
    });
  }

  toArray() {
    this.members = Array.from(this.members);
  }
}
