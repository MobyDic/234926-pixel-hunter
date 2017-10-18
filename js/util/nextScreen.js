import state from '../data/initialState';
import showScreen from '../showScreen';

export default(data, screen) => {

  const countWrong = state.answers.reduce(function (sum, current) {
    if (!current.answer) {
      sum++;
    }
    return sum;
  }, 0);

  state.wrong = (countWrong > state.lives) ? state.lives : countWrong;

  if (state.answers.length < state.game && state.lives > state.wrong) {
    showScreen(screen.direction.next(data));
  } else {
    showScreen(screen.direction.end(data));
  }
};
