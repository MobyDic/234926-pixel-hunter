import data from './data/data';
import state from './data/initialState';
import IntroScreen from './screens/intro/intro-screen';
import GreetingScreen from './screens/greeting/greeting-screen';
import RulesScreen from './screens/rules/rules-screen';
import FirstGameScreen from './screens/game-1/game-1-screen';
import SecondGameScreen from './screens/game-2/game-2-screen';
import ThirdGameScreen from './screens/game-3/game-3-screen';
import StatsScreen from './screens/stats/stats-screen';

const ControllerId = {
  INTRO: `intro`,
  GREETING: `greeting`,
  RULES: `rules`,
  FIRST_GAME: `first-game`,
  SECOND_GAME: `second-game`,
  THIRD_GAME: `third-game`,
  STATS: `stats`
};

const routes = {
  [ControllerId.INTRO]: new IntroScreen(data),
  [ControllerId.GREETING]: new GreetingScreen(data),
  [ControllerId.RULES]: new RulesScreen(data),
  [ControllerId.FIRST_GAME]: FirstGameScreen,
  [ControllerId.SECOND_GAME]: SecondGameScreen,
  [ControllerId.THIRD_GAME]: ThirdGameScreen,
  [ControllerId.STATS]: new StatsScreen()
};

const saveState = (stateObj) => {
  return JSON.stringify(stateObj);
};

const loadState = (dataString) => {

  try {
    return JSON.parse(dataString);
  } catch (e) {
    return state;
  }
};

export default class Application {

  static init() {

    const hashChangeHandler = () => {
      const hashValue = location.hash.replace(`#`, ``);
      const [id, dataRt] = hashValue.split(`?`);
      if (id === `stats`) {
        this.changeHash(id, dataRt);
      }

    };

    window.onhashchange = hashChangeHandler;
    hashChangeHandler();
  }

  static changeHash(id, dataObj) {
    const controller = routes[id];
    if (controller) {
      controller.init(loadState(dataObj));
    }
  }

  static showIntro() {
    location.hash = ControllerId[`INTRO`];
    routes[ControllerId.INTRO].init();
  }

  static showGreeting() {
    location.hash = ControllerId[`GREETING`];
    routes[ControllerId.GREETING].init();
  }

  static showRules() {
    location.hash = ControllerId[`RULES`];
    routes[ControllerId.RULES].init();
  }

  static showFirstGame() {
    const firstGame = new routes[ControllerId.FIRST_GAME](data);
    firstGame.init();
    location.hash = ControllerId[`FIRST_GAME`];
  }

  static showSecondGame() {
    const secondGame = new routes[ControllerId.SECOND_GAME](data);
    secondGame.init();
    location.hash = ControllerId[`SECOND_GAME`];
  }

  static showThirdGame() {
    const thirdGame = new routes[ControllerId.THIRD_GAME](data);
    thirdGame.init();
    location.hash = ControllerId[`THIRD_GAME`];
  }

  static showStats() {
    location.hash = `${ControllerId[`STATS`]}?${saveState(state)}`;
    routes[ControllerId.STATS].init(loadState(state));
  }

}

Application.init();

