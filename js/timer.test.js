import assert from 'assert';
import timer from './timer.js';


describe(`Функция создания таймера`, () => {

  it(`Корректность работы метода tick`, () => {
    assert.equal(timer(10).tick().time, 9);
    assert.equal(timer(0).tick(), `Закончилось время!`);

  });

  // тесты на корректность данных
  it(`Некоректные данные`, () => {
    assert.throws(() => timer({}), Error);
    assert.throws(() => timer(``), Error);
    assert.throws(() => timer(null), Error);
    assert.throws(() => timer(true), Error);
  });

  it(`Невалидные данные`, () => {
    assert.throws(() => timer(-3), Error);
  });
});
