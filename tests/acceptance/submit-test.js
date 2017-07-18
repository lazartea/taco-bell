import { test } from 'qunit';
import moduleForAcceptance from 'taco-bell/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | submit');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');

  });
});
