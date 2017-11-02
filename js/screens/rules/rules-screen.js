import RulesView from './rules-view';
import showScreen from '../../showScreen';
import App from '../../application';
import GameModel from '../game-1/game-model.js';


class RulesScreen {

  constructor(data) {
    this.data = data;
    this.view = new RulesView(data);
    this.model = new GameModel();
  }

  init() {
    showScreen(this.view.element);

    this.view.clickPrev = (evt) => {
      evt.preventDefault();
      App.showGreeting();
    };

    this.view.clickNext = (evt) => {
      evt.preventDefault();
      this.model.initGame(evt.toElement.previousElementSibling.value);
      App.showGame(this.model.getState.answers.length);
    };

    this.view.buttonGameDsbl = (button, evt) => {
      button.disabled = (evt.target.value) ? false : true;
    };

  }
}

export default RulesScreen;
