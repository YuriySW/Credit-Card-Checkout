import {el} from 'redom';

// Создаем элементы карточки
export const cardNumber = el('span.card__number', 'xxxx xxxx xxxx xxxx');
export const cardName = el('span.card__name', 'John Doe');
export const cardDate = el('span.card__date', 'MM/YY');
export const cardPersonal = el('div.card__personal', cardName, cardDate);
export const creditCard = el('div.credit-card', cardNumber, cardPersonal);
export const secureText = el('p.secure', 'Secure Checkout');
