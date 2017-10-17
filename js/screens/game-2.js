import createElement from '../createElement';
import headerTemplate from './header';
import state from '../data/initialState';
import question from '../data/question.js';
import nextScreen from '../util/nextScreen';
import showScreen from '../showScreen';


export default (data) => {
  const questions = question();

  const gameSecondHtml = `${headerTemplate}
    <div class="game">
      <p class="game__task">${data.secondgame.description}</p>
      <form class="game__content  game__content--wide">
        <div class="game__option">
          <img src="${questions.question}" alt="Option 1" width="705" height="455">
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
    const radioChecked = gameContent.querySelectorAll(`input[type=radio]:checked`);

    if (radioChecked.length > 0) {
      radioChecked.forEach(function (arr) {

        state.answers.push({'answer': (arr.value === questions.type), 'time': 7});

      });

      nextScreen(data, data.secondgame);

    }
  });

  showFirstGame.addEventListener(`click`, () => {
    showScreen(data.secondgame.direction.prev(data));
  });


  return screenSecondGame;
};
