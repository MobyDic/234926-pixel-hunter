import question from '../../data/question';
import state from '../../data/initialState';
import {stateArray} from '../../data/stateArray';


class GameModel {

  get getQuestion() {
    return question();
  }

  get time() {
    return state.time;
  }

  get getState() {
    return state;
  }

  get lastTime() {
    return state.lastTime;
  }

  answersPush(correctness) {
    state.answers.push(correctness);
  }

  statesPush() {

    stateArray.push({'state': state});
  }

  updateTime() {
    --state.lastTime;
  }

  resetTime(timerId) {
    clearInterval(timerId);
    state.lastTime = state.time;
  }

  validNextScreen() {

    const countWrong = state.answers.reduce(function (sum, current) {
      if (!current.answer) {
        sum++;
      }
      return sum;
    }, 0);

    state.wrong = (countWrong > state.lives) ? state.lives : countWrong;

    return (state.answers.length < state.game && state.lives > state.wrong);
  }

  initGame(userName) {
    state.answers = [];
    state.wrong = 0;
    state.userName = userName;
  }
}

export default GameModel;
