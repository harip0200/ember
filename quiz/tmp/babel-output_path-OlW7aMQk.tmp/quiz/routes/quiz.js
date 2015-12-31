define("quiz/routes/quiz", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({
    model: function model(que) {

      return this.store.all("quiz").get("content")[que.id];
    }
  });
});