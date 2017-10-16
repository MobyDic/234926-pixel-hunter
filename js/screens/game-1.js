import createElement from '../createElement';
import showScreen from '../showScreen';
import headerTemplate from './header';
import state from '../data/initialState';
import question from '../data/question.js';

export default (data) => {
  const gameFirstHtml = `${headerTemplate}
    <div class="game">
      <p class="game__task">${data.firstgame.description}</p>
      <form class="game__content">
        <div class="game__option">
          <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
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
          <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
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
      <div class="stats">
        <ul class="stats">
          <li class="stats__result stats__result--wrong"></li>
          <li class="stats__result stats__result--slow"></li>
          <li class="stats__result stats__result--fast"></li>
          <li class="stats__result stats__result--correct"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--unknown"></li>
        </ul>
      </div>
    </div>`;

  const screenFirstGame = createElement(gameFirstHtml);
  const showRules = screenFirstGame.querySelector(`.back`);
  const gameContent = screenFirstGame.querySelector(`.game__content`);

  gameContent.addEventListener(`click`, () => {
    const radioChecked = screenFirstGame.querySelectorAll(`input[type=radio]:checked`);
    if (radioChecked.length > 1) {
      if (state.answers.length < state.game) {
        state.answers.push({'answer': true, time: 20});
        console.log(state.answers);
        showScreen(data.firstgame.direction.next(data));
      } else {
        showScreen(data.firstgame.direction.end(data));
      }
    }
  });

  showRules.addEventListener(`click`, () => {
    showScreen(data.firstgame.direction.prev(data));
  });

return screenFirstGame;
}
