"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('quiz/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].FixtureAdapter.extend({});
});
define('quiz/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'quiz/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _quizConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _quizConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _quizConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _quizConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('quiz/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'quiz/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _quizConfigEnvironment) {

  var name = _quizConfigEnvironment['default'].APP.name;
  var version = _quizConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('quiz/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('quiz/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('quiz/controllers/quiz', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({});
});
define('quiz/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'quiz/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _quizConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_quizConfigEnvironment['default'].APP.name, _quizConfigEnvironment['default'].APP.version)
  };
});
define('quiz/initializers/export-application-global', ['exports', 'ember', 'quiz/config/environment'], function (exports, _ember, _quizConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_quizConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _quizConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_quizConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define("quiz/models/quiz", ["exports", "ember-data"], function (exports, _emberData) {

  var quiz = _emberData["default"].Model.extend({

    question: _emberData["default"].attr("string"),
    optionA: _emberData["default"].attr("string"),
    optionB: _emberData["default"].attr("string"),
    answer: _emberData["default"].attr("string")
  });
  quiz.reopenClass({
    FIXTURES: [{
      id: 1,
      question: "What is the national animal of China?",
      optionA: "Giant panda",
      optionB: "panda",
      answer: "Giant panda"
    }]

  });
  exports["default"] = quiz;
});
define('quiz/router', ['exports', 'ember', 'quiz/config/environment'], function (exports, _ember, _quizConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _quizConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route("quiz", { path: "/quiz/:id" });
  });

  exports['default'] = Router;
});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('quiz/config/environment', ['ember'], function(Ember) {
  var prefix = 'quiz';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("quiz/app")["default"].create({"name":"quiz","version":"0.0.0+8328fb2f"});
}

/* jshint ignore:end */
//# sourceMappingURL=quiz.map