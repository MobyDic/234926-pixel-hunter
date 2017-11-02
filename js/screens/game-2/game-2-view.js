import AbstractView from '../abstractView';

class SecondGameView extends AbstractView {
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
      <p class="game__task">${this.data.secondgame.description}</p>
      <form class="game__content  game__content--wide">
        <div class="game__option">
          <img src="${this.questions[0].image.url}" alt="Option 1" width="705" height="455">
          <label class="game__answer  game__answer--photo">
            <input name="question1" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--wide  game__answer--paint">
            <input name="question1" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
      </form>
      ${this.statsResult}
    </div>`.trim();
  }

  bind() {
    const secondGame = this.element;
    const showFirstGame = secondGame.querySelector(`.back`);
    const showSecondGame = secondGame.querySelector(`.game__content`);
    this.tick();

    showSecondGame.addEventListener(`click`, (evt) => {
      const radioChecked = secondGame.querySelectorAll(`input[type=radio]:checked`);
      this.clickNext(radioChecked, evt);
    });

    showFirstGame.addEventListener(`click`, (evt) => {
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

export default SecondGameView;
