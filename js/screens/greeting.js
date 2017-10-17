import createElement from '../createElement';
import showScreen from '../showScreen';

export default (data) => {
  const greetingHtml = `<div class="greeting central--blur">
    <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">${data.greeting.description}</div>
    <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
  </div>`;

  const screenGreeting = createElement(greetingHtml);
  const showRules = screenGreeting.querySelector(`.greeting__continue`);

  showRules.addEventListener(`click`, () => {
    showScreen(data.greeting.direction.next(data));
  });

  return screenGreeting;
};
