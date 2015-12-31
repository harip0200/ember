import Ember from 'ember';

export default Ember.Route.extend({
  model:function(que){

    console.log(que.id)
    return this.store.all("quiz" ).get("content")[que.id];
  }
});
