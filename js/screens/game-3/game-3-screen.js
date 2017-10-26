import ThirdGameView from './game-3-view';
import timer from '../../util/timer';
import showScreen from '../../showScreen';
import App from '../../application';
import GameModel from '../game-1/game-model.js';
import statsResult from '../statsResult';
import headerTemplate from '../header';


class ThirdGameScreen {

  constructor(data) {

    this.data = data;
    this.model = new GameModel();
  }

  init() {
    const questions = [this.model.getQuestion, this.model.getQuestion, this.model.getQuestion];

    this.view = new ThirdGameView(this.data, questions, headerTemplate(this.model.getState), statsResult(this.model.getState));

    showScreen(this.view.element);

    this.view.clickPrev = (evt) => {
      evt.preventDefault();
      this.model.resetTime(this.view.tick);
      App.showFirstGame();
    };

    this.view.clickNext = (evt) => {
      const model = this.model;

      const questionClick = questions.find(function (arr) {
        return (arr.question === evt.srcElement.childNodes[1].currentSrc);

      });

      model.answersPush({'answer': (questionClick.type === `paint`), 'time': model.time - model.lastTime});

      if (model.validNextScreen()) {
        App.showFirstGame();
      } else {
        App.showStats();
      }
      this.model.resetTime(this.view.tick);

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

export default ThirdGameScreen;
