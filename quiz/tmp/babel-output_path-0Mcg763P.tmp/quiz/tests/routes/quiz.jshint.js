define('quiz/tests/routes/quiz.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/quiz.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/quiz.js should pass jshint.');
  });
});