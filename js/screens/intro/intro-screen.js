import IntroView from './intro-view';
import showScreen from '../../showScreen';
import App from '../../application';

class IntroScreen {

  constructor(data) {
    this.data = data;
    this.view = new IntroView(data);
  }

  init() {
    showScreen(this.view.element);

    this.view.goToNextScreen = (evt) => {
      evt.preventDefault();
      App.showGreeting();
    };
  }
}

export default IntroScreen;
