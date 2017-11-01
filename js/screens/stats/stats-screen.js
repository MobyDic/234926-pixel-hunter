import StatsView from './stats-view';
import showScreen from '../../showScreen';
import App from '../../application';
import GameModel from '../game-1/game-model.js';
import {stateArray} from '../../data/stateArray';


class StatsScreen {

  constructor() {

    this.model = new GameModel();
  }

  init(state) {
    stateArray[stateArray.length - 1].state = state;

    this.view = new StatsView(stateArray);

    showScreen(this.view.element);

    this.view.clickPrev = (evt) => {
      evt.preventDefault();
      App.showGreeting();
    };

  }
}

export default StatsScreen;
