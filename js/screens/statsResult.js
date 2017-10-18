export default (state) => {

  let answerStats = ``;

  state.answers.forEach(function (arr) {
    if (arr.answer) {
      switch (arr.time) {
        case (arr.time < state.quickTime):
          answerStats += `<li class="stats__result stats__result--fast"></li>`;
          break;
        case (arr.time > state.slowTime):
          answerStats += `<li class="stats__result stats__result--slow"></li>`;
          break;
        default:
          answerStats += `<li class="stats__result stats__result--correct"></li>`;
      }
    } else {
      answerStats += `<li class="stats__result stats__result--wrong"></li>`;
    }
  });

  const result = `<div class="stats">
      <ul class="stats">
        ${answerStats}
        ${`<li class="stats__result stats__result--unknown"></li>`.repeat(state.game - state.answers.length)}
      </ul>
    </div>`;
  return result;
};
