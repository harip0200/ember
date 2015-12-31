QUnit.module('JSHint - routes');
QUnit.test('routes/quiz.js should pass jshint', function(assert) { 
  assert.expect(1);
  assert.ok(false, 'routes/quiz.js should pass jshint.\nroutes/quiz.js: line 5, col 74, Expected \')\' and instead saw \';\'.\nroutes/quiz.js: line 5, col 75, Missing semicolon.\n\n2 errors'); 
});
