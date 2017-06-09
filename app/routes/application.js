import Ember from 'ember';


export default Ember.Route.extend({
  actions: {
    printData: function(value) {
      var amt = value;
      var bellMenu = this.currentModel;
      var finalList = [];

      while (amt >= 1.00){
        var currentItem = bellMenu[Math.floor(Math.random() * bellMenu.length)];
        if (amt - currentItem.price >= 0) {
          finalList.push(currentItem.title)
          var amt = amt - currentItem.price
        }

      }
      alert("You could get " +finalList+" and still have $" +Number(amt).toFixed(2) + " left!");
    }
  },



  model() {
    return [{
      id: 1,
      title: ' Cheesy Gordita Crunch',
      price: 2.79,
      mealType: 'taco',
    },
    {
      id: 2,
      title: ' Nacho Cheese Doritos Locos Tacos',
      price: 1.49,
      mealType: 'taco',
    },
    {
      id: 3,
      title: ' Fiery Doritos Locos Tacos',
      price: 1.49,
      mealType: 'taco',
    },
    {
      id: 4,
      title: ' Nacho Cheese Doritos Locos Tacos',
      price: 1.49,
      mealType: 'taco',
    },
    {
      id: 5,
      title: ' Cool Ranch Doritos Locos Tacos',
      price: 1.49,
      mealType: 'taco',
    },
    {
      id: 6,
      title: ' Crunchy Taco',
      price: 1.19,
      mealType: 'taco',
    },
    {
      id: 7,
      title: ' Soft Taco',
      price: 1.19,
      mealType: 'taco',
    },
    {
      id: 8,
      title: ' Chicken Soft Taco',
      price: 1.69,
      mealType: 'taco',
    },
    {
      id: 9,
      title: ' Double Decker Taco',
      price: 1.79,
      mealType: 'taco',
    },
    {
      id: 10,
      title: ' Doritos Cheesy Gordita Crunch',
      price: 2.99,
      mealType: 'taco',
    },
    {
      id: 11,
      title: ' Nacho Cheese Doritos Locos Tacos Supreme',
      price: 1.79,
      mealType: 'taco',
    },
    {
      id: 12,
      title: ' Fiery Doritos Locos Tacos Supreme',
      price: 1.79,
      mealType: 'taco',
    },
    {
      id: 13,
      title: ' Cool Ranch Doritos Locos Tacos Supreme',
      price: 1.79,
      mealType: 'taco',
    },
    {
      id: 14,
      title: ' Crunchy Taco Supreme',
      price: 1.59,
      mealType: 'taco',
    },
    {
      id: 15,
      title: ' Soft Taco Supreme',
      price: 1.59,
      mealType: 'taco',
    },
    {
      id: 16,
      title: ' Grilled Steak Soft Taco',
      price: 2.49,
      mealType: 'taco',
    },
    {
      id: 17,
      title: ' Double Decker Taco Supreme',
      price: 2.19,
      mealType: 'taco',
    },
    {
      id: 18,
      title: ' Quesarito',
      price: 2.49,
      mealType: 'burrito',
    },
    {
      id: 19,
      title: ' XXL Grilled Stuft Burrito',
      price: 3.99,
      mealType: 'burrito',
    },
    {
      id: 20,
      title: ' Cantina Power Burrito',
      price: 3.79,
      mealType: 'vegetarian',
    },
    {
      id: 21,
      title: ' Double Decker Taco',
      price: 1.79,
      mealType: 'vegetarian',
    },
    {
      id: 22,
      title: ' Beefy 5-Layer Burrito',
      price: 1.59,
      mealType: 'burrito',
    },
    {
      id: 23,
      title: ' Cheesy Potato Burrito',
      price: 2.49,
      mealType: 'burrito',
    },
    {
      id: 24,
      title: ' Beefy Nacho Griller',
      price: 1.59,
      mealType: 'burrito',
    },
    {
      id: 25,
      title: ' Loaded Potato Griller',
      price: 1.59,
      mealType: 'burrito',
    },
    {
      id: 26,
      title: ' Burrito Supreme',
      price: 2.99,
      mealType: 'burrito',
    },
    {
      id: 27,
      title: ' Smothered Burrito',
      price: 3.99,
      mealType: 'burrito',
    },
    {
      id: 28,
      title: ' Bean Burrito',
      price: 1.19,
      mealType: 'burrito',
    },
    {
      id: 29,
      title: ' 7-Layer Burrito',
      price: 2.79,
      mealType: 'burrito',
    },
    {
      id: 30,
      title: ' Shredded Chicken Burrito',
      price: 1.69,
      mealType: 'burrito',
    },
    {
      id: 31,
      title: ' Combo Burrito',
      price: 2.39,
      mealType: 'burrito',
    },
    {
      id: 32,
      title: ' Chipotle Chicken Loaded Griller',
      price: 1.59,
      mealType: 'burrito',
    },
    {
      id: 33,
      title: ' Quesalupa',
      price: 2.99,
      mealType: 'specialty',
    },
    {
      id: 34,
      title: ' Chalupa Supreme',
      price: 2.59,
      mealType: 'specialty',
    },
    {
      id: 35,
      title: ' Fiesta Taco Salad',
      price: 2.99,
      mealType: 'specialty',
    },
    {
      id: 36,
      title: ' Cheese Quesadilla',
      price: 2.39,
      mealType: 'specialty',
    },
    {
      id: 37,
      title: ' Nachos Bellgrande',
      price: 3.19,
      mealType: 'specialty',
    },
    {
      id: 38,
      title: ' Mexican Pizza',
      price: 3.39,
      mealType: 'specialty',
    },
    {
      id: 39,
      title: ' Quesadilla',
      price: 3.19,
      mealType: 'specialty',
    },
    {
      id: 40,
      title: ' Gordita Supreme',
      price: 2.59,
      mealType: 'specialty',
    },
    {
      id: 41,
      title: ' Cantina Power Bowl',
      price: 4.99,
      mealType: 'specialty',
    },
    {
      id: 42,
      title: ' Crunchwrap Supreme',
      price: 3.19,
      mealType: 'specialty',
    }, {
      id: 43,
      title: ' Nachos Supreme',
      price: 2.39,
      mealType: 'specialty',
    }, {
      id: 44,
      title: ' Meximelt',
      price: 2.49,
      mealType: 'specialty',
    }, {
      id: 45,
      title: ' Cheesy Roll-up',
      price: 1.00,
      mealType: 'vegetarian',
    }, {
        id: 46,
        title: ' Quesalupa Combo',
        price: 4.99,
        mealType: 'combo',
    }, {
        id: 47,
        title: ' XXL Grilled Stuft Burrito Combo',
        price: 5.99,
        mealType: 'combo',
    }, {
        id: 48,
        title: ' Mexican Pizza Combo',
        price: 5.99,
        mealType: 'combo',
    }, {
        id: 49,
        title: ' 2 Chalupas Supreme Combo',
        price: 5.99,
        mealType: 'combo',
    },
    ]


  }
});
