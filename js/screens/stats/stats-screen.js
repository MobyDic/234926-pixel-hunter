import StatsView from './stats-view';
import showScreen from '../../showScreen';
import App from '../../application';
import GameModel from '../game-1/game-model.js';


class StatsScreen {

  constructor() {

    this.model = new GameModel();
  }

  init() {

    this.view = new StatsView(this.model.getState);

    showScreen(this.view.element);

    this.view.clickPrev = (evt) => {
      evt.preventDefault();
      App.showGreeting();
    };

  }
}

export default StatsScreen;
