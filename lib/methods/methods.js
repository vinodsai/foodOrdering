Meteor.methods({
  addOrder: function(name,coffee,snacks,desserts,time){
    Orders.insert({
      name: name,
      coffee: coffee,
      snacks: snacks,
      desserts: desserts,
      time: time,
      createdAt: new Date()
    })
  },
  finishedOrders: function(id,name,coffee,snacks,desserts,time){
    FinishedOrders.insert({
      name: name,
      coffee: coffee,
      snacks: snacks,
      desserts: desserts,
      time: time
    });
    Orders.remove(id);
  },
  clearfinishedOrders: function(id){
    FinishedOrders.remove(id);
  }
});
