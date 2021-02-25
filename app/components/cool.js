import Component from '@glimmer/component';
import { hbs } from 'ember-template-imports';
import { helper } from '@ember/component/helper';
import { Button } from './other/bla';

const bla = helper(() => {
  return 'bla';
});

export default class Hello extends Component {
  name = 'world';

  static template = hbs`
    <span>Hello, {{this.name}}!</span>

    <Button class="button">{{bla}}</Button>
  `;
}
