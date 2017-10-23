import GreetingView from './greeting-view';
import showScreen from '../../showScreen';
import state from '../../data/initialState';

export default (data) => {

  const greeting = new GreetingView(data);

  greeting.clickNext = (evt) => {
    evt.preventDefault();
    showScreen(data.greeting.direction.next(data).element);
  };

  state.answers = [];
  state.wrong = 0;
  state.time = 30;
  state.lastTime = 30;

  return greeting;
};
