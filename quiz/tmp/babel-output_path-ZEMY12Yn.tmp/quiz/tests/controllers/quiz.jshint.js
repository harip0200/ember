define('quiz/tests/controllers/quiz.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/quiz.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/quiz.js should pass jshint.');
  });
});