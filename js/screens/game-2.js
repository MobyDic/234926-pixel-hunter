import createElement from '../createElement';
import showScreen from '../showScreen';
import headerTemplate from './header';
import state from '../data/initialState';


export default (data) => {
  const gameSecondHtml = `${headerTemplate}
    <div class="game">
      <p class="game__task">${data.secondgame.description}</p>
      <form class="game__content  game__content--wide">
        <div class="game__option">
          <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
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
      <div class="stats">
        <ul class="stats">
          <li class="stats__result stats__result--wrong"></li>
          <li class="stats__result stats__result--slow"></li>
          <li class="stats__result stats__result--fast"></li>
          <li class="stats__result stats__result--correct"></li>
          <li class="stats__result stats__result--wrong"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--slow"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--fast"></li>
          <li class="stats__result stats__result--unknown"></li>
        </ul>
      </div>
    </div>`;

  const screenSecondGame = createElement(gameSecondHtml);
  const showFirstGame = screenSecondGame.querySelector(`.back`);
  const gameContent = screenSecondGame.querySelector(`.game__content`);

  gameContent.addEventListener(`click`, () => {
    const gameAnswer = gameContent.querySelectorAll(`input[type=radio]:checked`);
    if (gameAnswer.length > 0) {
      if (state.answers.length < state.game) {
        state.answers.push({'answer': true, time: 20});
        console.log(state.answers);
        showScreen(data.secondgame.direction.next(data));
      } else {
        showScreen(data.secondgame.direction.end(data));
      }
    }
  });

  showFirstGame.addEventListener(`click`, () => {
    showScreen(data.secondgame.direction.prev(data));
  });


  return screenSecondGame;
}
