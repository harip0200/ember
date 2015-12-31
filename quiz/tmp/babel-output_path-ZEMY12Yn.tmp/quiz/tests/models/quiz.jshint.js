define('quiz/tests/models/quiz.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/quiz.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/quiz.js should pass jshint.\nmodels/quiz.js: line 22, col 20, Missing semicolon.\n\n1 error');
  });
});