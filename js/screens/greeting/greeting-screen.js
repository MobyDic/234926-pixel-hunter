import GreetingView from './greeting-view';
import showScreen from '../../showScreen';
import App from '../../application';

class GreetingScreen {

  constructor(data) {
    this.data = data;
    this.view = new GreetingView(data);
  }

  init() {
    showScreen(this.view.element);

    this.view.clickNext = (evt) => {
      evt.preventDefault();
      App.showRules();
    };
  }
}

export default GreetingScreen;
