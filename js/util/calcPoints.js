const correctReplyPoint = 100;
const quickReplyPoint = 50;
const slowReplyPoint = -50;
const plusLife = 50;
const quickTime = 5;
const slowTime = 10;

const calcPoints = (answersArray, restlife) => {
  if (!(answersArray instanceof Array)) {
    throw new Error(`Ответы пользователя должны не в массиве`);
  }
  if (typeof restlife !== `number`) {
    throw new Error(`Оставшиеся жизни не число`);
  }

  if (restlife < 0) {
    throw new Error(`Оставшихся жизней должно быть больше 0`);
  }

  if (answersArray.length < 10) {
    return -1;
  }

  let countPoints = 0;

  if (restlife > 0) {
    countPoints += restlife * plusLife;
  }

  answersArray.forEach((row) => {
    if (typeof row.answer !== `boolean`) {
      throw new Error(`Тип ответа не boolean`);
    }
    if (typeof row.time !== `number`) {
      throw new Error(`Время ответа не число`);
    }
    if (row.time <= 0) {
      throw new Error(`Время ответа должно быть больше 0`);
    }

    if (row.answer) {
      countPoints += correctReplyPoint;

      if (row.time < quickTime) {
        countPoints += quickReplyPoint;
      }
      if (row.time > slowTime) {
        countPoints += slowReplyPoint;
      }
    }
  });

  return countPoints;
};

export default calcPoints;
