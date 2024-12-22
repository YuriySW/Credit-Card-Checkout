import {el} from 'redom';
import {
  handleNameInput,
  handleCardNumberInput,
  handleDateInput,
  handleCvvInput,
} from './handlers.js';

export const form = el(
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
