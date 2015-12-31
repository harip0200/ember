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
    }, {
      id: 2,
      question: "What is the national animal of India?",
      optionA: "Tiger",
      optionB: "lion",
      answer: "Tiger"
    }, {
      id: 3,
      question: "What is the national animal of africa?",
      optionA: "springbok",
      optionB: "deer",
      answer: "springbok"
    }]

  });
  exports["default"] = quiz;
});
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
define('quiz/routes/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {

      return this.store.find('quiz');
    }
  });
});
define("quiz/routes/quiz", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({
    model: function model(que) {

      return this.store.all("quiz").get("content")[que.id];
    }
  });
});
define("quiz/templates/answer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 0
          }
        },
        "moduleName": "quiz/templates/answer.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("quiz/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "quiz/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "id", "title");
        var el2 = dom.createTextNode("Welcome to Ember");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [2, 0], [2, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("quiz/templates/quiz", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "quiz/templates/quiz.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "model._data.question", ["loc", [null, [1, 0], [1, 24]]]], ["inline", "input", [], ["type", "button", "value", ["subexpr", "@mut", [["get", "model._data.optionA", ["loc", [null, [2, 28], [2, 47]]]]], [], []]], ["loc", [null, [2, 0], [2, 49]]]], ["inline", "input", [], ["type", "button", "value", ["subexpr", "@mut", [["get", "model._data.optionB", ["loc", [null, [3, 28], [3, 47]]]]], [], []]], ["loc", [null, [3, 0], [3, 49]]]], ["content", "outlet", ["loc", [null, [4, 0], [4, 10]]]]],
      locals: [],
      templates: []
    };
  })());
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