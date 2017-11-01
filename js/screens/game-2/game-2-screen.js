import SecondGameView from './game-2-view';
import timer from '../../util/timer';
import showScreen from '../../showScreen';
import App from '../../application';
import GameModel from '../game-1/game-model.js';
import statsResult from '../statsResult';
import headerTemplate from '../header';


class SecondGameScreen {

  constructor(data) {

    this.data = data;
    this.model = new GameModel();
  }

  init() {
    const questions = this.model.getQuestion;

    this.view = new SecondGameView(this.data, questions, headerTemplate(this.model.getState), statsResult(this.model.getState));

    showScreen(this.view.element);

    this.view.clickPrev = (evt) => {
      evt.preventDefault();
      this.model.resetTime(this.view.tick);
      App.showFirstGame();
    };

    this.view.clickNext = (radioChecked) => {
      const model = this.model;

      if (radioChecked.length > 0) {
        radioChecked.forEach(function (arr) {
          model.answersPush({'answer': (arr.value === questions.type), 'time': model.time - model.lastTime});
        });

        if (model.validNextScreen()) {
          App.showThirdGame();
        } else {
          model.statesPush();
          App.showStats();
        }

        this.model.resetTime(this.view.tick);
      }
    };

    this.view.tick = setInterval(() => {

      if (this.model.lastTime === 0) {
        this.model.resetTime(this.view.tick);
        App.showStats();
      } else {

        this.view.gameTimer().innerHTML = timer(this.model.lastTime).tick().time;
        this.model.updateTime();
      }
    }, 1000);

  }
}

export default SecondGameScreen;
