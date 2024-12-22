import {el, mount} from 'redom';
import {secureText, creditCard} from './card.js';
import {form} from './createElement.js';

export function renderApp(container) {
  const cardContainer = el('div.card', secureText, creditCard, form);
  const app = el('div.wrapper', cardContainer);

  mount(container, app);
}
