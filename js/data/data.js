import screenGreeting from '../screens/greeting/greeting';
import screenRules from '../screens/rules/rules';
import screenFirstGame from '../screens/game-1/game-1';
import screenSecondGame from '../screens/game-2/game-2';
import screenThirdGame from '../screens/game-3/game-3';
import screenStats from '../screens/stats/stats';


const screens = {
  'intro': {
    description: ` Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.`,
    direction: {
      next: screenGreeting
    }
  },
  'greeting': {
    description: `<h3>Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!</h3>
      <p>Правила игры просты.<br>
      Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
      Задача кажется тривиальной, но не думай, что все так просто.<br>
      Фотореализм обманчив и коварен.<br>
      Помни, главное — смотреть очень внимательно.</p>`,
    direction: {
      next: screenRules
    }
  },
  'rules': {
    description: `Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?`,
    direction: {
      next: screenFirstGame,
      prev: screenGreeting
    }
  },
  'firstgame': {
    description: `Угадайте для каждого изображения фото или рисунок?`,
    direction: {
      next: screenSecondGame,
      prev: screenRules,
      end: screenStats
    }
  },
  'secondgame': {
    description: `Угадай, фото или рисунок?`,
    direction: {
      next: screenThirdGame,
      prev: screenFirstGame,
      end: screenStats
    }
  },
  'thirdgame': {
    description: `Найдите рисунок среди изображений`,
    direction: {
      next: screenFirstGame,
      prev: screenSecondGame,
      end: screenStats
    }
  },
  'stats': {
    description: `Победа!`,
    direction: {
      prev: screenGreeting
    }
  }
};

export default screens;
