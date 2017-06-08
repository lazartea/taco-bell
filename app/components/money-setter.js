import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    pushData: function(value) {
      this.sendAction('pushData',value);
    }
  }

});
