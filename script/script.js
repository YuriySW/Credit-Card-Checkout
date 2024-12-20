import {el, mount} from 'redom';

const secureText = el('p.secure', 'Secure Checkout');

const cardNumber = el('span.card__number', 'xxxx xxxx xxxx xxxx');

const cardName = el('span.card__name', 'John Doe');
const cardDate = el('span.card__date', 'MM/YY');

const cardPersonal = el('div.card__personal', cardName, cardDate);

const creditCard = el('div.credit-card', cardNumber, cardPersonal);

const form = el(
  'form.form#form',
  el(
    'div.form__input-wrap.form__input-wrap_holder',
    el('label.form__label.form__holder-label', 'Card Holder'),
    el('input.input.input__holder', {
      type: 'text',
      placeholder: 'Enter card holder name',
      oninput: handleNameInput,
    })
  ),
  el(
    'div.form__input-wrap.form__input-wrap_number',
    el('label.form__label.form__number-label', 'Card Number'),
    el('input.input.input__number#cardNumber', {
      type: 'text',
      placeholder: 'xxxx xxxx xxxx xxxx',
      maxlength: 19,
      oninput: handleCardNumberInput,
    })
  ),
  el(
    'div.form__input-wrap.form__input-wrap_date',
    el('label.form__label.form__date-label', 'Card Expiry'),
    el('input.input.input__date', {
      type: 'text',
      placeholder: 'MM/YY',
      maxlength: 5,
      oninput: handleDateInput,
    })
  ),
  el(
    'div.form__input-wrap.form__input-wrap_cvv',
    el('label.form__label.form__cvv-label', 'CVV'),
    el('input.input.input__cvv', {
      type: 'text',
      placeholder: '***',
      maxlength: 3,
      oninput: handleCvvInput,
    })
  ),
  el('button.form__button', 'CHECK OUT')
);

const cardContainer = el('div.card', secureText, creditCard, form);

const app = el('div.wrapper', cardContainer);

mount(document.body, app);

function handleNameInput(event) {
  const value = event.target.value;
  if (/^[a-zA-Z\s]*$/.test(value)) {
    cardName.textContent = value || 'John Doe';
  } else {
    event.target.value = value.slice(0, -1);
  }
}

function handleCardNumberInput(event) {
  let value = event.target.value.replace(/\D/g, '');
  value = value.slice(0, 16);
  event.target.value = value.replace(/(\d{4})/g, '$1 ').trim();
  cardNumber.textContent = event.target.value || 'xxxx xxxx xxxx xxxx';
}

function handleDateInput(event) {
  let value = event.target.value.replace(/\D/g, '');
  value = value.slice(0, 4);
  if (value.length >= 3) {
    value = value.slice(0, 2) + '/' + value.slice(2);
  }
  event.target.value = value;
  cardDate.textContent = value || 'MM/YY';
}

function handleCvvInput(event) {
  const value = event.target.value.replace(/\D/g, '');
  event.target.value = value.slice(0, 3);
}
