import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('quiz');
  this.route('quiz' ,{path:"/quiz/:id/"});
  this.route('quiz' ,{path:"/quiz/:id/:id2"});
  this.route("answer");
  this.route('answer' ,{path:"/answer/:id/:id2"});

});

export default Router;
