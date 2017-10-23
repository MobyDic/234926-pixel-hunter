import AbstractView from '../abstractView';

class FirstGameView extends AbstractView {
  constructor(data, questions, headerTemplate, statsResult) {
    super();
    this.data = data;
    this.questions = questions;
    this.headerTemplate = headerTemplate;
    this.statsResult = statsResult;
  }

  template() {
    return `
    <div class="game">${this.headerTemplate}
      <p class="game__task">${this.data.firstgame.description}</p>
      <form class="game__content">
        <div class="game__option">
          <img src="${this.questions[0].question}" alt="Option 1" width="468" height="458">
          <label class="game__answer game__answer--photo">
            <input name="question1" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
            <input name="question1" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
        <div class="game__option">
          <img src="${this.questions[1].question}" alt="Option 2" width="468" height="458">
          <label class="game__answer  game__answer--photo">
            <input name="question2" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--paint">
            <input name="question2" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
      </form>
      ${this.statsResult}
    </div>`.trim();
  }

  bind() {
    const firstGame = this.element;
    const showRules = firstGame.querySelector(`.back`);
    const showFirstGame = firstGame.querySelector(`.game__content`);

    setTimeout(this.tick(), 1000);

    showFirstGame.addEventListener(`click`, (evt) => {
      const radioChecked = firstGame.querySelectorAll(`input[type=radio]:checked`);
      this.clickNext(radioChecked, evt);
    });

    showRules.addEventListener(`click`, (evt) => {
      this.clickPrev(evt);
    });

    this.gameTimer();
  }


  clickNext() {}

  clickPrev() {}

  tick() {}

  gameTimer() {
    const gameTimer = this.element.querySelector(`.game__timer`);

    return gameTimer;
  }

}

export default FirstGameView;
