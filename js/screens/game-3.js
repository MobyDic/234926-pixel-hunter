import createElement from '../createElement';
import showScreen from '../showScreen';
import headerTemplate from './header';
import state from '../data/initialState';


export default (data) => {
  const gameThirdHtml = `${headerTemplate}
    <div class="game">
      <p class="game__task">${data.firstgame.description}</p>
      <form class="game__content  game__content--triple">
        <div class="game__option">
          <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option  game__option--selected">
          <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option">
          <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
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

  const screenThirdGame = createElement(gameThirdHtml);
  const showSecondGame = screenThirdGame.querySelector(`.back`);
  const gameContent = screenThirdGame.querySelector(`.game__content`);

  gameContent.addEventListener(`click`, () => {
    if (state.answers.length < state.game) {
        state.answers.push({'answer': true, time: 20});
        console.log(state.answers);
        showScreen(data.thirdgame.direction.next(data));
      } else {
        showScreen(data.thirdgame.direction.end(data));
      }
  });

  showSecondGame.addEventListener(`click`, () => {
    showScreen(data.thirdgame.direction.prev(data));
  });

  return screenThirdGame;
}
