import state from '../data/initialState';

const CORRECT_REPLY_POINT = 100;
const QUICK_REPLY_POINT = 50;
const SLOW_REPLY_POINT = -50;
const PLUS_LIFE = 50;

const calcPoints = (answersArray, restlife) => {

  if (!(answersArray instanceof Array)) {
    throw new Error(`Ответы пользователя находятся не в массиве`);
  }
  if (typeof restlife !== `number`) {
    throw new Error(`Оставшиеся жизни не число`);
  }

  if (restlife < -1) {
    throw new Error(`Оставшихся жизней должно быть больше 0`);
  }

  if (answersArray.length < state.game || restlife < 0) {
    return -1;
  }

  let countPoints = 0;

  if (restlife > 0) {
    countPoints += restlife * PLUS_LIFE;
  }

  answersArray.forEach((row) => {
    if (typeof row.answer !== `boolean`) {
      throw new Error(`Тип ответа не boolean`);
    }
    if (typeof row.time !== `number`) {
      throw new Error(`Время ответа не число`);
    }
    if (row.time < 0) {
      throw new Error(`Время ответа должно быть больше 0`);
    }

    if (row.answer) {
      countPoints += CORRECT_REPLY_POINT;

      if (row.time < state.quickTime) {
        countPoints += QUICK_REPLY_POINT;
      }
      if (row.time > state.slowTime) {
        countPoints += SLOW_REPLY_POINT;
      }
    }
  });

  return countPoints;
};

export default calcPoints;
