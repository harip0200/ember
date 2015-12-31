define('quiz/tests/unit/models/quiz-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/quiz-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/quiz-test.js should pass jshint.');
  });
});