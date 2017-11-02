import AbstractView from '../abstractView';

class ThirdGameView extends AbstractView {
  constructor(data, questions, headerTemplate, statsResult) {
    super();
    this.data = data;
    this.questions = questions;
    this.headerTemplate = headerTemplate;
    this.statsResult = statsResult;
  }

  template() {
    return `
    ${this.headerTemplate}
    <div class="game">
      <p class="game__task">${this.data.thirdgame.description}</p>
      <form class="game__content  game__content--triple">
        <div class="game__option">
          <img src="${this.questions[0].image.url}" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option  game__option--selected">
          <img src="${this.questions[1].image.url}" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option">
          <img src="${this.questions[2].image.url}" alt="Option 1" width="304" height="455">
        </div>
      </form>
      ${this.statsResult}
    </div>`.trim();
  }

  bind() {
    const thirdGame = this.element;
    const showSecondGame = thirdGame.querySelector(`.back`);
    const showThirdGame = thirdGame.querySelector(`.game__content`);
    this.tick();

    showThirdGame.addEventListener(`click`, (evt) => {

      this.clickNext(evt);
    });

    showSecondGame.addEventListener(`click`, (evt) => {
      this.clickPrev(evt);
    });

  }

  clickNext() {}

  clickPrev() {}

  tick() {}

  gameTimer() {
    const gameTimer = this.element.querySelector(`.game__timer`);
    return gameTimer;
  }

}

export default ThirdGameView;
