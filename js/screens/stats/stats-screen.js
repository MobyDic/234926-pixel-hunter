import StatsView from './stats-view';
import showScreen from '../../showScreen';
import App from '../../application';
import GameModel from '../game-1/game-model.js';
import APIServer from '../../util/api-server';

class StatsScreen {

  constructor() {

    this.model = new GameModel();
  }

  init() {

    APIServer.loadStatistics(this.model.userName)
        .then((stateArray) => {

          this.view = new StatsView(stateArray);

          showScreen(this.view.element);

          this.view.goToPrevScreen = (evt) => {
            evt.preventDefault();
            App.showGreeting();
          };

        });
  }
}

export default StatsScreen;
