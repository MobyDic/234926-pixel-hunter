import createElement from '../createElement';
import showScreen from '../showScreen';

export default (data) => {
  const rulesHtml = `<header class="header">
      <div class="header__back">
        <button class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.svg" width="101" height="44">
        </button>
      </div>
    </header>
    <div class="rules">
      ${data.rules.description}
      <form class="rules__form">
        <input class="rules__input" type="text" placeholder="Ваше Имя">
        <button class="rules__button  continue" type="submit" disabled>Go!</button>
      </form>
    </div>`;

  const screenRules = createElement(rulesHtml);
  const showGreeting = screenRules.querySelector(`.back`);
  const nameUser = screenRules.querySelector(`.rules__input`);
  const buttonGame = screenRules.querySelector(`.rules__button`);

  showGreeting.addEventListener(`click`, () => {
    showScreen(data.rules.direction.prev(data));
  });

  buttonGame.addEventListener(`click`, (e) => {
    e.preventDefault();
    showScreen(data.rules.direction.next(data));
  });

  nameUser.addEventListener(`keyup`, (evt) => {
    buttonGame.disabled = (evt.target.value) ? false : true;
  });

  return screenRules;
}
