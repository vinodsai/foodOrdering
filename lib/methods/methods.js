Meteor.methods({
  addOrder: function(name,coffee,snacks,desserts,time){
    // check(name, String);
    // check(coffee, String);
    // check(snacks, String);
    // check(desserts, String);
    Orders.insert({
      name: name,
      coffee: coffee,
      snacks: snacks,
      desserts: desserts,
      time: time,
      userId: Meteor.userId(),
      createdAt: new Date()
    });
    ProfileOrders.insert({
      name: name,
      coffee: coffee,
      snacks: snacks,
      desserts: desserts,
      time: time,
      userId: Meteor.userId(),
      createdAt: new Date()
    });

  },
  finishedOrders: function(id,name,coffee,snacks,desserts,time){
    FinishedOrders.insert({
      name: name,
      coffee: coffee,
      snacks: snacks,
      desserts: desserts,
      userId: Meteor.userId(),
      time: time
    });
    Orders.remove(id);
  },
  clearfinishedOrders: function(id){
    FinishedOrders.remove(id);
  },
  addFavouriteOrder: function(name,coffee,snacks,desserts,time){
    FavouriteOrders.insert({
      name: name,
      coffee: coffee,
      snacks: snacks,
      desserts: desserts,
      userId: Meteor.userId(),
      time: time
    });
  },
  addFeedback: function(feedback){
    Feedback.insert({
      userId: Meteor.userId(),
      emailId: Meteor.user().emails[0].address,
      feedback: feedback,
      createdAt: new Date()
    });
  },
  deleteFeedback: function(id){
    Feedback.remove(id);
  }
});
