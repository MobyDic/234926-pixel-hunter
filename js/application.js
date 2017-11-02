import data from './data/data';
import state from './data/initialState';
import IntroScreen from './screens/intro/intro-screen';
import GreetingScreen from './screens/greeting/greeting-screen';
import RulesScreen from './screens/rules/rules-screen';
import FirstGameScreen from './screens/game-1/game-1-screen';
import SecondGameScreen from './screens/game-2/game-2-screen';
import ThirdGameScreen from './screens/game-3/game-3-screen';
import StatsScreen from './screens/stats/stats-screen';
import APIServer from './util/api-server';


const ControllerId = {
  INTRO: ``,
  GREETING: `greeting`,
  RULES: `rules`,
  FIRST_GAME: `game-1`,
  SECOND_GAME: `game-2`,
  THIRD_GAME: `game-3`,
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

const loadData = {};

export default class Application {

  static init() {

    const hashChangeHandler = () => {
      const hashValue = location.hash.replace(`#`, ``);
      const [id, dataRt] = hashValue.split(`?`);

      this.changeHash(id, dataRt);

    };

    window.onhashchange = hashChangeHandler;
    hashChangeHandler();

    this.loadGameData();
  }

  static async loadGameData() {
    this.loadData = await APIServer.getData();
    const imagesURL = APIServer.getImagesURL(this.loadData);
    await Promise.all(imagesURL.map((it) => APIServer.loadImage(it)));
  }


  static changeHash(id, dataObj) {
    const controller = routes[id];
    if (controller && id.substr(0, 4) !== `game`) {
      controller.init(loadState(dataObj));
    } else {

      let maxId = setTimeout(function () {});
      while (maxId--) {
        clearTimeout(maxId);

      }
      state.lastTime = state.time;
      const ControllerGame = controller;
      new ControllerGame(data).init(this.loadData[state.answers.length]);
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

  static showFirstGame(loadData) {
    const firstGame = new routes[ControllerId.FIRST_GAME](data);
    firstGame.init(loadData);
    location.hash = ControllerId[`FIRST_GAME`];
  }

  static showSecondGame(loadData) {
    const secondGame = new routes[ControllerId.SECOND_GAME](data);
    secondGame.init(loadData);
    location.hash = ControllerId[`SECOND_GAME`];
  }

  static showThirdGame(loadData) {
    const thirdGame = new routes[ControllerId.THIRD_GAME](data);
    thirdGame.init(loadData);
    location.hash = ControllerId[`THIRD_GAME`];
  }

  static showStats() {
    location.hash = `${ControllerId[`STATS`]}?${saveState(state)}`;
    routes[ControllerId.STATS].init(loadState(state));
  }

  static showGame() {

    const index = state.answers.length;

    switch (this.loadData[index].type) {
      case `two-of-two`:
        this.showFirstGame(this.loadData[index]);
        break;
      case `tinder-like`:
        this.showSecondGame(this.loadData[index]);
        break;
      case `one-of-three`:
        this.showThirdGame(this.loadData[index]);
        break;
    }
  }
}

Application.init();

