import createElement from '../createElement';
import showScreen from '../showScreen';

export default (data) => {
  const introHtml = `<div id="main" class="central__content">
      <div id="intro" class="intro">
        <h1 class="intro__asterisk">*</h1>
        <p class="intro__motto"><sup>*</sup>${data.intro.description}</div>
    </div>`;

  const screenIntro = createElement(introHtml);
  const showGreeting = screenIntro.querySelector(`.intro__asterisk`);

  showGreeting.addEventListener(`click`, () => {
    showScreen(data.intro.direction.next(data));
  });

  return screenIntro;
}
