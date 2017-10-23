import FirstGameView from './game-1-view';
import showScreen from '../../showScreen';
import question from '../../data/question';
import headerTemplate from '../header';
import state from '../../data/initialState';
import statsResult from '../statsResult';
import nextScreen from '../../util/nextScreen';
import timer from '../../util/timer';

export default (data) => {
  const questions = [question(), question()];

  const firstGame = new FirstGameView(data, questions, headerTemplate(state), statsResult(state));

  firstGame.clickNext = (radioChecked) => {

    if (radioChecked.length > 1) {
      radioChecked.forEach(function (arr, i) {

        state.answers.push({'answer': (arr.value === questions[i].type), 'time': state.lastTime - state.time});

      });
      state.lastTime = state.time;
      nextScreen(data, data.firstgame);

    }
  };

  firstGame.clickPrev = (evt) => {
    evt.preventDefault();
    showScreen(data.firstgame.direction.prev(data).element);
  };


  firstGame.tick = () => {
    if (state.time === 0) {
      clearInterval(firstGame.tick);
      showScreen(data.firstgame.direction.end(data).element);
    } else {

      setTimeout(firstGame.tick, 1000);
      firstGame.gameTimer().innerHTML = timer(state.time).tick().time;
      state.time--;
    }
  };

  return firstGame;
};
