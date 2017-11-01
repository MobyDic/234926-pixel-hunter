
export default(state) => {
  let row = ``;
  state.answers.forEach(function (arr) {
    if (arr.answer) {
      if (arr.time < state.quickTime) {
        row += `<li class="stats__result stats__result--fast"></li>`;
      } else if (arr.time > state.slowTime) {
        row += `<li class="stats__result stats__result--slow"></li>`;
      } else {
        row += `<li class="stats__result stats__result--correct"></li>`;
      }
    } else {
      row += `<li class="stats__result stats__result--wrong"></li>`;
    }
  });

  if (state.answers.length < state.game) {
    row += `<li class="stats__result stats__result--unknown">`.repeat(state.game - state.answers.length);
  }

  return row;
};
