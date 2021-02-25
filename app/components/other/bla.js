import { hbs } from 'ember-template-imports';

export const Button = hbs`
  <button type={{@type}} ...attributes>{{yield}}</button>
`;
