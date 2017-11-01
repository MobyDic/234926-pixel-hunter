import RulesView from './rules-view';
import showScreen from '../../showScreen';
import App from '../../application';
import RulesModel from './rules-model';

class RulesScreen {

  constructor(data) {
    this.data = data;
    this.view = new RulesView(data);
    this.model = new RulesModel();
  }

  init() {
    showScreen(this.view.element);

    this.view.clickPrev = (evt) => {
      evt.preventDefault();
      App.showGreeting();
    };

    this.view.clickNext = (evt) => {
      evt.preventDefault();
      this.model.name = evt.toElement.previousElementSibling.value;
      App.showFirstGame();
    };

    this.view.buttonGameDsbl = (button, evt) => {
      button.disabled = (evt.target.value) ? false : true;
    };

  }
}

export default RulesScreen;
