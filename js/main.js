(() => {

  const screens = document.querySelectorAll(`template`);
  const mainScreen = document.querySelector(`.central`);
  const firstScreen = 0;
  const lastScreen = screens.length - 1;
  let currentScreen = 0;

  window.isChangeLeftScreenEvent = ((evt) => {
      const LEFT_ARROW = 37;
      if (evt.keyCode === LEFT_ARROW) return evt.altKey && (evt.keyCode === LEFT_ARROW);
    }
  );

  window.isChangeRightScreenEvent = ((evt) => {
      const RIGHT_ARROW = 39;
      if (evt.keyCode === RIGHT_ARROW) return evt.altKey && (evt.keyCode === RIGHT_ARROW);
    }
  );

  const changeScreen = (evt) => {
    if (window.isChangeLeftScreenEvent(evt) && currentScreen > firstScreen) {
        showScreen(--currentScreen);
    }
    if (window.isChangeRightScreenEvent(evt) && currentScreen < lastScreen) {
        showScreen(++currentScreen);
    }
  };

  document.addEventListener(`keydown`, (evt) => {
    changeScreen(evt);
  });

  const showScreen = (number) => {
    mainScreen.innerHTML = screens[number].innerHTML;
  };

  showScreen(currentScreen);

})();

