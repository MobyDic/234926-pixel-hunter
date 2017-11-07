
import AbstractView from '../abstractView';

class IntroView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  template() {
    return `
      <div id="main" class="central__content">
        <div id="intro" class="intro">
          <h1 class="intro__asterisk">*</h1>
          <p class="intro__motto"><sup>*</sup>${this.data.intro.description}
        </div>
      </div>`.trim();
  }

  bind() {
    const intro = this.element;
    const showGreeting = intro.querySelector(`.intro__asterisk`);

    showGreeting.addEventListener(`click`, (evt) => {
      this.goToNextScreen(evt);
    });
  }

  goToNextScreen() {

  }
}

export default IntroView;
