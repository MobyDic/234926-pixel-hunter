import AbstractView from '../abstractView';

class RulesView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  template() {
    return `
      <header class="header">
      <div class="header__back">
        <button class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.svg" width="101" height="44">
        </button>
      </div>
      </header>
      <div class="rules">
        ${this.data.rules.description}
        <form class="rules__form">
          <input class="rules__input" type="text" placeholder="Ваше Имя">
          <button class="rules__button  continue" type="submit" disabled>Go!</button>
        </form>
      </div>`.trim();
  }

  bind() {
    const rules = this.element;
    const showGreeting = rules.querySelector(`.back`);
    const nameUser = rules.querySelector(`.rules__input`);
    const showFirstGame = rules.querySelector(`.rules__button`);

    showFirstGame.addEventListener(`click`, (evt) => {
      this.goToNextScreen(nameUser.value, evt);
    });

    showGreeting.addEventListener(`click`, (evt) => {
      this.goToPrevScreen(evt);
    });

    nameUser.addEventListener(`keyup`, (evt) => {
      this.makeButtonEnabled(showFirstGame, evt);
    });

  }

  goToNextScreen() {}

  goToPrevScreen() {}

  makeButtonEnabled() {}
}

export default RulesView;
