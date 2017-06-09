import Ember from 'ember';

export default Ember.Controller.extend({
  totalMenu: [],
  totalCost: Ember.computed('totalMenu', function() {
    totalMenu.map(function(menuItem)  {
      return menuItem.price;
    }).reduce(function(acc,price) {
      return acc + price;
    });
  }),

});
