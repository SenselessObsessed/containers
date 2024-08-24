import Team from "../index";
import Character from "../js/Character";
import ErrorRepository from "../js/ErrorRepository";
import Settings from "../js/Settings";

test('should be add Character on team', () => {
    const vasya = new Character('Vasya', 23, 'Entry');
    const andrew = new Character('Andrew', 25, 'Defender');
    const bill = new Character('Bill', 30, 'Entry');
    const barcelona = new Team();

    barcelona.add(vasya);
    barcelona.addAll(andrew, bill);

    const equal = [
        {name: 'Vasya', age: 23, position: 'Entry'}, 
        {name: 'Andrew', age: 25, position: 'Defender'}, 
        {name: 'Bill', age: 30, position: 'Entry'}
    ]
    expect(barcelona.toArray()).toEqual(equal);
});

test('should throw error "Персонаж уже добавлен"', () => {
    const vasya = new Character('Vasya', 23, 'Entry');
    const barcelona = new Team();

    barcelona.add(vasya);
    expect(() => barcelona.add(vasya)).toThrow('Персонаж уже добавлен');
});

test('should be show an error', () => {
    const errors = new ErrorRepository();
    expect(errors.translate(404)).toBe('Не найдено');
});

test('should show unknown error', () => {
    const errors = new ErrorRepository();
    expect(errors.translate(403)).toBe('Unknown error');
});

test('should be switch settings', () => {
    const settings = new Settings();
    const settingsTheme = {
        key: 'theme',
        value: 'light'
    }

    settings.settings = settingsTheme;
    const result = settings.settings.get('theme');

    expect(result).toEqual('light');
});
