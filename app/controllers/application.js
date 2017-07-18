import Ember from 'ember';

export default Ember.Controller.extend({
  totalMenu: [],
  totalCost: Ember.computed('totalMenu', function() {
    this.totalMenu.map(function(menuItem)  {
      return menuItem.price;
    }).reduce(function(acc,price) {
      return acc + price;
    });
  }),



});
