import SecondGameView from './game-2-view';
import timer from '../../util/timer';
import showScreen from '../../showScreen';
import App from '../../application';
import GameModel from '../game-1/game-model.js';
import statsResult from '../statsResult';
import headerTemplate from '../header';
import APIServer from '../../util/api-server';


class SecondGameScreen {

  constructor(data) {

    this.data = data;
    this.model = new GameModel();
  }

  init(loadData) {
    const questions = loadData.answers;

    this.view = new SecondGameView(this.data, questions, headerTemplate(this.model.getState), statsResult(this.model.getState));

    showScreen(this.view.element);

    this.view.clickPrev = (evt) => {
      evt.preventDefault();

      // eslint-disable-next-line
      if(confirm("Результаты игры будут потеряны. Продолжить выход?")) {
        this.model.resetTime(this.view.tick);
        App.showRules();
      }

    };

    this.view.clickNext = (radioChecked) => {
      const model = this.model;

      if (radioChecked.length > 0) {
        radioChecked.forEach(function (arr, i) {
          model.answersPush({'answer': (arr.value === questions[i].type.substr(0, 5)), 'time': model.time - model.lastTime});
        });

        if (model.validNextScreen()) {
          App.showGame();
        } else {
          model.statesPush();
          APIServer.sendStatistics(model.getState, model.userName);
          App.showStats();
        }

        this.model.resetTime(this.view.tick);
      }
    };

    this.view.tick = setInterval(() => {

      if (this.model.lastTime === 0) {
        // this.model.resetTime(this.view.tick);
        // App.showStats();
        this.model.answersPush({'answer': false, 'time': this.model.time - this.model.lastTime});

        if (this.model.validNextScreen()) {
          App.showGame();
        } else {
          this.model.statesPush();
          APIServer.sendStatistics(this.model.getState, this.model.userName);
          App.showStats();
        }
        this.model.resetTime(this.view.tick);

      } else {

        if (this.model.lastTime <= this.model.warningTime) {
          this.view.gameTimer().classList.add(`game__timer--flash`);
        }

        this.view.gameTimer().innerHTML = timer(this.model.lastTime).tick().time;
        this.model.updateTime();
      }
    }, 1000);

  }
}

export default SecondGameScreen;
