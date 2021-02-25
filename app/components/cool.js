import Component from '@glimmer/component';
import { hbs } from 'ember-template-imports';
import { Button } from './other/bla';

export default class Hello extends Component {
  name = 'world';

  static template = hbs`
    <span>Hello, {{this.name}}!</span>

    <Button class="button">Cool</Button>
  `;
}
