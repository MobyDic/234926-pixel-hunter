import createElement from '../createElement';
import headerTemplate from './header';
import statsResult from './statsResult';
import state from '../data/initialState';
import question from '../data/question.js';
import nextScreen from '../util/nextScreen';
import showScreen from '../showScreen';


export default (data) => {
  const questions = [question(), question(), question()];

  const gameThirdHtml = `${headerTemplate(state)}
    <div class="game">
      <p class="game__task">${data.firstgame.description}</p>
      <form class="game__content  game__content--triple">
        <div class="game__option">
          <img src="${questions[0].question}" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option  game__option--selected">
          <img src="${questions[1].question}" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option">
          <img src="${questions[2].question}" alt="Option 1" width="304" height="455">
        </div>
      </form>
      ${statsResult(state)}
    </div>`;

  const screenThirdGame = createElement(gameThirdHtml);
  const showSecondGame = screenThirdGame.querySelector(`.back`);
  const gameContent = screenThirdGame.querySelector(`.game__content`);

  gameContent.addEventListener(`click`, (evt) => {

    const questionClick = questions.find(function (arr) {
      return (arr.question === evt.srcElement.childNodes[1].currentSrc);
    });

    state.answers.push({'answer': (questionClick.type === `photo`), 'time': 7});

    nextScreen(data, data.thirdgame);
  });

  showSecondGame.addEventListener(`click`, () => {
    showScreen(data.thirdgame.direction.prev(data));
  });

  return screenThirdGame;
};
