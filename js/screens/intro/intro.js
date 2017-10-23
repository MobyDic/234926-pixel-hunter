import IntroView from './intro-view';
import showScreen from '../../showScreen';

export default (data) => {

  const intro = new IntroView(data);

  intro.clickNext = (evt) => {
    evt.preventDefault();
    showScreen(data.intro.direction.next(data).element);
  };

  return intro;
};
