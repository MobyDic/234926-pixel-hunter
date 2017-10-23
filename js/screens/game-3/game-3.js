import ThirdGameView from './game-3-view';
import showScreen from '../../showScreen';
import question from '../../data/question';
import headerTemplate from '../header';
import state from '../../data/initialState';
import statsResult from '../statsResult';
import nextScreen from '../../util/nextScreen';


export default (data) => {
  const questions = [question(), question(), question()];

  const thirdGame = new ThirdGameView(data, questions, headerTemplate(state), statsResult(state));

  thirdGame.clickNext = (evt) => {

    const questionClick = questions.find(function (arr) {

      return (arr.question === evt.srcElement.childNodes[1].currentSrc);

    });

    state.answers.push({'answer': (questionClick.type === `paint`), 'time': state.lastTime - state.time});
    state.lastTime = state.time;
    nextScreen(data, data.thirdgame);


  };

  thirdGame.clickPrev = (evt) => {
    evt.preventDefault();
    showScreen(data.thirdgame.direction.prev(data).element);
  };

  thirdGame.tick = () => {
    if (state.time === 0) {

      clearInterval(thirdGame.tick);
      showScreen(data.thirdgame.direction.end(data).element);

    } else {

      thirdGame.gameTimer().innerHTML = state.time;
      setTimeout(thirdGame.tick, 500);
    }
  };

  return thirdGame;
};
