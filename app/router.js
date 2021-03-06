import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  this.route('committees');
  this.route('subcommittee', {path: '/subcommittee/:committee_id'});
  this.route('bills');
  this.route('senatesubcommittee', {path: '/senatesubcommittee/:committee_id'});
  this.route('jointsubcommittee', {path: '/jointsubcommittee/:committee_id'});
});

export default Router;
