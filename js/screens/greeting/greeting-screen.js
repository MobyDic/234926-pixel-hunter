import GreetingView from './greeting-view';
import showScreen from '../../showScreen';
import App from '../../application';
import GameModel from '../game-1/game-model.js';

class GreetingScreen {

  constructor(data) {
    this.data = data;
    this.view = new GreetingView(data);
    this.model = new GameModel();
  }

  init() {
    showScreen(this.view.element);

    this.view.clickNext = (evt) => {
      evt.preventDefault();
      App.showRules();
    };

    this.model.initGame();
  }
}

export default GreetingScreen;
