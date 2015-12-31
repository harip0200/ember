define('quiz/router', ['exports', 'ember', 'quiz/config/environment'], function (exports, _ember, _quizConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _quizConfigEnvironment['default'].locationType
  });
  Router.map(function () {
    this.route("quiz", { path: "/quiz/:id" }, function () {
      this.route('answer');
    });
  });

  exports['default'] = Router;
});