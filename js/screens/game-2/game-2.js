import SecondGameView from './game-2-view';
import showScreen from '../../showScreen';
import question from '../../data/question';
import headerTemplate from '../header';
import state from '../../data/initialState';
import statsResult from '../statsResult';
import nextScreen from '../../util/nextScreen';


export default (data) => {
  const questions = question();

  const secondGame = new SecondGameView(data, questions, headerTemplate(state), statsResult(state));

  secondGame.clickNext = (radioChecked) => {

    if (radioChecked.length > 0) {
      radioChecked.forEach(function (arr) {

        state.answers.push({'answer': (arr.value === questions.type), 'time': state.lastTime - state.time});

      });
      state.lastTime = state.time;
      nextScreen(data, data.secondgame);

    }
  };

  secondGame.clickPrev = (evt) => {
    evt.preventDefault();
    showScreen(data.secondgame.direction.prev(data).element);
  };

  secondGame.tick = () => {
    if (state.time === 0) {

      clearInterval(secondGame.tick);
      showScreen(data.secondgame.direction.end(data).element);

    } else {

      secondGame.gameTimer().innerHTML = state.time;
      setTimeout(secondGame.tick, 500);
    }
  };

  return secondGame;
};
