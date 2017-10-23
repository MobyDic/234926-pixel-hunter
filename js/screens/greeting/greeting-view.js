
import AbstractView from '../abstractView';

class GreetingView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  template() {
    return `
      <div class="greeting central--blur">
        <div class="greeting__logo">
          <img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter">
        </div>
        <h1 class="greeting__asterisk">*</h1>
        <div class="greeting__challenge">${this.data.greeting.description}</div>
        <div class="greeting__continue">
          <span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span>
        </div>
      </div>`.trim();
  }

  bind() {
    const greeting = this.element;
    const showRules = greeting.querySelector(`.greeting__continue`);

    showRules.addEventListener(`click`, (evt) => {
      this.clickNext(evt);
    });
  }

  clickNext() {

  }
}

export default GreetingView;
