import Team from '../team';
import Character from '../char';

test('Добавление игрока', () => {
  const character = new Character('Rob', 'Bowman');
  const team = new Team();
  team.add(character);
  const newContainer = new Set();
  newContainer.add({ name: 'Rob', type: 'Bowman' });
  expect(team.members).toEqual(newContainer);
});

test('Добавление существующего игрока', () => {
  const character = new Character('Rob', 'Bowman');
  const team = new Team();
  team.add(character);
  expect(() => {
    team.add(character);
  }).toThrow();
});

test('Добавление нескольких игроков, проверка задвоения', () => {
  const character1 = new Character('Rob', 'Bowman');
  const character2 = new Character('Roman', 'Undead');
  const character3 = new Character('Alex', 'Zombie');
  const team = new Team();
  team.addAll(character1, character2, character3, character2);
  expect(team.members.size).toBe(3);
});

test('проверка конвертации Set в массив', () => {
  const character1 = new Character('Rob', 'Bowman');
  const character2 = new Character('Rory', 'Undead');
  const team = new Team();
  team.addAll(character1, character2);
  team.toArray();
  expect(team.members).toEqual([{ name: 'Rob', type: 'Bowman' }, { name: 'Rory', type: 'Undead' }]);
});
