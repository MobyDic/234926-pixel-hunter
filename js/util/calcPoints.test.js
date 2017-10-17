import assert from 'assert';
import calcPoints from './calcPoints.js';


describe(`Функция подсчета очков.`, () => {

  it(`Количество ответов меньше 10`, () => {
    assert.equal(calcPoints([
      {answer: false, time: 1},
      {answer: false, time: 2},
      {answer: true, time: 3},
      {answer: true, time: 4},
      {answer: false, time: 5},
      {answer: false, time: 6}], 3), -1);
  });

  it(`Количество ответов 10, своевременно, остались все жизни`, () => {
    assert.equal(calcPoints([
      {answer: true, time: 5},
      {answer: true, time: 6},
      {answer: true, time: 7},
      {answer: true, time: 8},
      {answer: true, time: 9},
      {answer: true, time: 10},
      {answer: true, time: 9},
      {answer: true, time: 8},
      {answer: true, time: 7},
      {answer: true, time: 6}], 3), 1150);
  });


  it(`Количество ответов 10, быстро, остались все жизни`, () => {
    assert.equal(calcPoints([
      {answer: true, time: 1},
      {answer: true, time: 2},
      {answer: true, time: 3},
      {answer: true, time: 4},
      {answer: true, time: 3},
      {answer: true, time: 2},
      {answer: true, time: 1},
      {answer: true, time: 2},
      {answer: true, time: 3},
      {answer: true, time: 4}], 3), 1650);
  });

  it(`Количество ответов 10, медленно, остались все жизни`, () => {
    assert.equal(calcPoints([
      {answer: true, time: 11},
      {answer: true, time: 20},
      {answer: true, time: 30},
      {answer: true, time: 40},
      {answer: true, time: 30},
      {answer: true, time: 20},
      {answer: true, time: 11},
      {answer: true, time: 20},
      {answer: true, time: 30},
      {answer: true, time: 40}], 3), 650);
  });

  // тесты на корректность данных
  it(`Некоректные данные`, () => {
    assert.throws(() => calcPoints({}, {}), Error);
    assert.throws(() => calcPoints(``, false), Error);
    assert.throws(() => calcPoints(null, 3), Error);
    assert.throws(() => calcPoints(`true, false, true, true, false, true`, true), Error);
  });

  // тесты на валидность
  it(`Невалидные данные`, () => {
    assert.throws(() => calcPoints([
      {answer: true, time: 11},
      {answer: true, time: 22},
      {answer: true, time: 33},
      {answer: true, time: 40},
      {answer: true, time: 30},
      {answer: true, time: 20},
      {answer: true, time: 11},
      {answer: true, time: 20},
      {answer: true, time: 30},
      {answer: true, time: 40}], null), Error);

    assert.throws(() => calcPoints([
      {answer: true, time: null},
      {answer: true, time: 22},
      {answer: true, time: 33},
      {answer: true, time: 40},
      {answer: true, time: 30},
      {answer: true, time: 20},
      {answer: true, time: 11},
      {answer: true, time: 20},
      {answer: true, time: 30},
      {answer: true, time: 40}], 3), Error);

    assert.throws(() => calcPoints([
      {answer: true, time: 11},
      {answer: true, time: 22},
      {answer: true, time: 33},
      {answer: true, time: 40},
      {answer: true, time: 30},
      {answer: true, time: 20},
      {answer: true, time: 11},
      {answer: true, time: 20},
      {answer: true, time: 30},
      {answer: true, time: 40}], -3), Error);

    assert.throws(() => calcPoints([
      {answer: true, time: -3},
      {answer: true, time: 33},
      {answer: true, time: 33},
      {answer: true, time: 40},
      {answer: true, time: 30},
      {answer: true, time: 20},
      {answer: true, time: 11},
      {answer: true, time: 20},
      {answer: true, time: 30},
      {answer: true, time: 40}], 3), Error);

    assert.throws(() => calcPoints([
      {answer: true, time: `ten`},
      {answer: true, time: 33},
      {answer: true, time: 33},
      {answer: true, time: 40},
      {answer: true, time: 30},
      {answer: true, time: 20},
      {answer: true, time: 11},
      {answer: true, time: 20},
      {answer: true, time: 30},
      {answer: true, time: 40}], 3), Error);

    assert.throws(() => calcPoints([
      {answer: true, time: {}},
      {answer: true, time: 33},
      {answer: true, time: 33},
      {answer: true, time: 40},
      {answer: true, time: 30},
      {answer: true, time: 20},
      {answer: true, time: 11},
      {answer: true, time: 20},
      {answer: true, time: 30},
      {answer: true, time: 40}], 3), Error);

  });
});
