import RulesView from './rules-view';
import showScreen from '../../showScreen';
import App from '../../application';

class RulesScreen {

  constructor(data) {
    this.data = data;
    this.view = new RulesView(data);
  }

  init() {
    showScreen(this.view.element);

    this.view.clickPrev = (evt) => {
      evt.preventDefault();
      App.showGreeting();
    };

    this.view.clickNext = (evt) => {
      evt.preventDefault();
      App.showFirstGame();
    };

    this.view.buttonGameDsbl = (button, evt) => {
      button.disabled = (evt.target.value) ? false : true;
    };

  }
}

export default RulesScreen;
