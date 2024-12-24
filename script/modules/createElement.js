import {el} from 'redom';
import {
  handleNameInput,
  handleCardNumberInput,
  handleDateInput,
  handleCvvInput,
} from './handlers.js';

export function createInputField({
  type = 'text',
  id = '',
  className = '',
  placeholder = '',
  maxLength = '',
  onInput = null,
}) {
  return el('input', {
    type,
    id,
    class: className,
    placeholder,
    maxlength: maxLength,
    oninput: onInput,
  });
}

export const form = el(
  'form.form#form',
  el(
    'div.form__input-wrap.form__input-wrap_holder',
    el('label.form__label.form__holder-label', 'Card Holder'),
    createInputField({
      className: 'input input__holder',
      placeholder: 'Enter card holder name',
      onInput: handleNameInput,
    })
  ),
  el(
    'div.form__input-wrap.form__input-wrap_number',
    el('label.form__label.form__number-label', 'Card Number'),
    createInputField({
      className: 'input input__number',
      placeholder: 'xxxx xxxx xxxx xxxx',
      maxLength: 19,
      onInput: handleCardNumberInput,
    })
  ),
  el(
    'div.form__input-wrap.form__input-wrap_date',
    el('label.form__label.form__date-label', 'Card Expiry'),
    createInputField({
      className: 'input input__date',
      placeholder: 'MM/YY',
      maxLength: 5,
      onInput: handleDateInput,
    })
  ),
  el(
    'div.form__input-wrap.form__input-wrap_cvv',
    el('label.form__label.form__cvv-label', 'CVV'),
    createInputField({
      className: 'input input__cvv',
      placeholder: '***',
      maxLength: 3,
      onInput: handleCvvInput,
    })
  ),
  el('button.form__button', 'CHECK OUT')
);

// export const form = el(
//   'form.form#form',
//   el(
//     'div.form__input-wrap.form__input-wrap_holder',
//     el('label.form__label.form__holder-label', 'Card Holder'),
//     el('input.input.input__holder', {
//       type: 'text',
//       placeholder: 'Enter card holder name',
//       oninput: handleNameInput,
//     })
//   ),
//   el(
//     'div.form__input-wrap.form__input-wrap_number',
//     el('label.form__label.form__number-label', 'Card Number'),
//     el('input.input.input__number#cardNumber', {
//       type: 'text',
//       placeholder: 'xxxx xxxx xxxx xxxx',
//       maxlength: 19,
//       oninput: handleCardNumberInput,
//     })
//   ),
//   el(
//     'div.form__input-wrap.form__input-wrap_date',
//     el('label.form__label.form__date-label', 'Card Expiry'),
//     el('input.input.input__date', {
//       type: 'text',
//       placeholder: 'MM/YY',
//       maxlength: 5,
//       oninput: handleDateInput,
//     })
//   ),
//   el(
//     'div.form__input-wrap.form__input-wrap_cvv',
//     el('label.form__label.form__cvv-label', 'CVV'),
//     el('input.input.input__cvv', {
//       type: 'text',
//       placeholder: '***',
//       maxlength: 3,
//       oninput: handleCvvInput,
//     })
//   ),
//   el('button.form__button', 'CHECK OUT')
// );
