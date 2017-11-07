import AbstractView from '../abstractView';
import calcPoints from '../../util/calcPoints';
import calcRow from '../../util/drawRows';

class StatsView extends AbstractView {
  constructor(stateArray) {
    super();
    this.stateArray = stateArray;
  }

  getWinTemplate(state, numList) {
    const POINT_FOR_CORRECT = 100;

    const head = (calcPoints(state.answers, state.lives - state.wrong) > 0) ? `<h1>Победа!</h1>` : `<h1>Поражение!</h1>`;
    const point = state.answers.filter((arr) => {
      return arr.answer;
    }).length * POINT_FOR_CORRECT;

    const result = (calcPoints(state.answers, state.lives - state.wrong) === -1) ? `fail` : point;

    return `${head}
      <table class="result__table">
        <tr>
          <td class="result__number">${numList + 1}.</td>
          <td colspan="2">
            <ul class="stats">${calcRow(state)}</ul>
          </td>
          <td class="result__points">×&nbsp;100</td>
          <td class="result__total">${result}</td>
        </tr>`;

  }

  getSpeedBonus(state) {
    const POINT_FOR_SPEED = 50;
    const speedBonus = state.answers.filter((arr) => {
      return arr.answer && arr.time < state.quickTime;
    }).length;
    if (speedBonus > 0) {
      return `<tr>
          <td></td>
          <td class="result__extra">Бонус за скорость:</td>
          <td class="result__extra">${speedBonus}&nbsp;<span class="stats__result stats__result--fast"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${speedBonus * POINT_FOR_SPEED}</td>
        </tr>`;
    } else {
      return ``;
    }
  }

  getLifeBonus(state) {
    const POINT_FOR_LIVE = 50;

    if (state.lives - state.wrong) {
      return `
        <tr>
          <td></td>
          <td class="result__extra">Бонус за жизни:</td>
          <td class="result__extra">${state.lives - state.wrong}&nbsp;<span class="stats__result stats__result--alive"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${(state.lives - state.wrong) * POINT_FOR_LIVE}</td>
        </tr>`;
    } else {
      return ``;
    }
  }

  getFineSlowness(state) {
    const POINT_FOR_SLOWNESS = -50;

    const fineSlowness = state.answers.filter((arr) => {
      return arr.answer && arr.time > state.slowTime;
    }).length;
    if (fineSlowness > 0) {
      return `<tr>
          <td></td>
          <td class="result__extra">Штраф за медлительность:</td>
          <td class="result__extra">${fineSlowness}&nbsp;<span class="stats__result stats__result--slow"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${fineSlowness * POINT_FOR_SLOWNESS}</td>
        </tr>`;
    } else {
      return ``;
    }
  }

  getTotalRezulte(state, points) {
    if (points > 0) {
      return `
        <tr>
          <td colspan="5" class="result__total  result__total--final">${calcPoints(state.answers, state.lives - state.wrong)}</td>
        </tr>`;
    } else {
      return ``;
    }
  }

  getAddInfo(state) {
    const points = calcPoints(state.answers, state.lives - state.wrong);
    if (points > 0) {
      return `
      ${this.getSpeedBonus(state)}
      ${this.getLifeBonus(state)}
      ${this.getFineSlowness(state)}
      ${this.getTotalRezulte(state, points)}`;
    } else {
      return ``;
    }
  }

  template() {
    const header = `<header class="header">
      <div class="header__back">
        <button class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.svg" width="101" height="44">
        </button>
      </div>
    </header>`;

    let result = ``;

    this.stateArray.forEach((arr, i) => {
      result += `
      <div class="result">
        ${this.getWinTemplate(this.stateArray[i], i)}
        ${this.getAddInfo(this.stateArray[i])}
        </table>
      </div>`.trim();
    });
    return header + result;
  }

  bind() {
    const stat = this.element;
    const showGreeting = stat.querySelector(`.back`);

    showGreeting.addEventListener(`click`, (evt) => {
      this.goToPrevScreen(evt);
    });

  }

  goToPrevScreen() {}

}

export default StatsView;
