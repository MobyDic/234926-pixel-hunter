import RulesView from './rules-view';
import showScreen from '../../showScreen';

export default (data) => {

  const rules = new RulesView(data);

  rules.clickNext = (evt) => {
    evt.preventDefault();
    showScreen(data.rules.direction.next(data).element);
  };

  rules.clickPrev = (evt) => {
    evt.preventDefault();
    showScreen(data.rules.direction.prev(data).element);
  };

  rules.buttonGameDsbl = (button, evt) => {
    button.disabled = (evt.target.value) ? false : true;
  };
  return rules;
};
