import Ember from 'ember';

export default Ember.Route.extend({
    model:function(question,click) {
      console.log(question)
      return question.id;
        }
})
