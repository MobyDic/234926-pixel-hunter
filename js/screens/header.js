export default(state) => {
  const headerTemplate = `<header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
    <h1 class="game__timer">${state.time}</h1>
    <div class="game__lives">
    ${`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`.repeat(state.wrong)}
    ${`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`.repeat(state.lives - state.wrong)}
    </div>
  </header>`;

  return headerTemplate;
};
