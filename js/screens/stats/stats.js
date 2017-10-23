import StatsView from './stats-view';
import showScreen from '../../showScreen';
import state from '../../data/initialState';

export default (data) => {

  const stats = new StatsView(state);

  stats.clickPrev = (evt) => {
    evt.preventDefault();
    showScreen(data.stats.direction.prev(data).element);
  };

  return stats;
};
