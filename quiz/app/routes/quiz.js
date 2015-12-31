import Ember from 'ember';

export default Ember.Route.extend({
  model:function(que){

    return this.store.all("quiz" ).get("content")[que.id];
  }
});
