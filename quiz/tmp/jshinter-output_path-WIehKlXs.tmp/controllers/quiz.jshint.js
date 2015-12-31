QUnit.module('JSHint - controllers');
QUnit.test('controllers/quiz.js should pass jshint', function(assert) { 
  assert.expect(1);
  assert.ok(false, 'controllers/quiz.js should pass jshint.\ncontrollers/quiz.js: line 5, col 1, Expected \'}\' to match \'{\' from line 3 and instead saw \'score\'.\ncontrollers/quiz.js: line 5, col 6, Expected \')\' and instead saw \':\'.\ncontrollers/quiz.js: line 5, col 7, Missing semicolon.\ncontrollers/quiz.js: line 5, col 7, Expected an assignment or function call and instead saw an expression.\ncontrollers/quiz.js: line 5, col 10, Missing semicolon.\ncontrollers/quiz.js: line 5, col 1, Unrecoverable syntax error. (62% scanned).\n\n7 errors'); 
});
