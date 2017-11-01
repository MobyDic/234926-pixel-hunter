import FirstGameView from './game-1-view';
import timer from '../../util/timer';
import showScreen from '../../showScreen';
import App from '../../application';
import GameModel from './game-model.js';
import statsResult from '../statsResult';
import headerTemplate from '../header';


class FirstGameScreen {

  constructor(data) {

    this.data = data;
    this.model = new GameModel();
  }

  init() {

    const questions = [this.model.getQuestion, this.model.getQuestion];

    this.view = new FirstGameView(this.data, questions, headerTemplate(this.model.getState), statsResult(this.model.getState));

    showScreen(this.view.element);

    this.view.clickPrev = (evt) => {
      evt.preventDefault();
      this.model.resetTime(this.view.tick);
      clearTimeout(this.view.tick);
      App.showRules();
    };

    this.view.clickNext = (radioChecked) => {
      const model = this.model;

      if (radioChecked.length > 1) {

        let arrValue = true;
        radioChecked.forEach(function (arr, i) {
          arrValue = (arr.value === questions[i].type) && arrValue;
        });

        model.answersPush({'answer': arrValue, 'time': model.time - model.lastTime});

        if (model.validNextScreen()) {
          App.showSecondGame();
        } else {
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

export default FirstGameScreen;
