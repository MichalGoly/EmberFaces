import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('clean-upload', 'Integration | Component | clean upload', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{clean-upload}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#clean-upload}}
      template block text
    {{/clean-upload}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
