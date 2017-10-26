import data from './data/data';
import IntroScreen from './screens/intro/intro-screen';
import GreetingScreen from './screens/greeting/greeting-screen';
import RulesScreen from './screens/rules/rules-screen';
import FirstGameScreen from './screens/game-1/game-1-screen';
import SecondGameScreen from './screens/game-2/game-2-screen';
import ThirdGameScreen from './screens/game-3/game-3-screen';
import StatsScreen from './screens/stats/stats-screen';


export default class Application {

  static showIntro() {
    const intro = new IntroScreen(data);
    intro.init();
  }

  static showGreeting() {
    const greeting = new GreetingScreen(data);
    greeting.init();
  }

  static showRules() {
    const rules = new RulesScreen(data);
    rules.init();
  }

  static showFirstGame() {
    const firstGameScreen = new FirstGameScreen(data);
    firstGameScreen.init();
  }

  static showSecondGame() {
    const secondGameScreen = new SecondGameScreen(data);
    secondGameScreen.init();
  }

  static showThirdGame() {
    const thirdGameScreen = new ThirdGameScreen(data);
    thirdGameScreen.init();
  }

  static showStats() {
    const statsScreen = new StatsScreen();
    statsScreen.init();
  }

}
