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