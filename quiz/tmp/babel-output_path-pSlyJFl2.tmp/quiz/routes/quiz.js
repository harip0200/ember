define("quiz/routes/quiz", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({
    model: function model() {
      console.log(this.store.findAll("quiz", "0").getProperties(['question', 'optionA', 'optionB']));
      return this.store.findAll("quiz");
    }
  });
});