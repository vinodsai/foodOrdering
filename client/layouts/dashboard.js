Template.dashboard.onRendered(function() {
  Meteor.subscribe('Orders');
  Meteor.subscribe('finishedOrders');
  Meteor.subscribe('users');
})

Template.dashboard.helpers({
  ordersCount: function() {
    return Orders.find().count();
  },
  eachOrder: function(){
    return Orders.find();
  },
  finishedOrder: function(){
    return FinishedOrders.find();
  },
  completedOrdersCount: function(){
    return FinishedOrders.find().count();
  },
  totalUsers: function(){
    return Meteor.users.find().count();
  }
})

Template.dashboard.events({
  'click #finishedOrder':function(){
   Meteor.call('finishedOrders', this._id,this.name,this.coffee,this.snacks,this.desserts,this.time);
 },
 'click #clearFinishedOrder':function(){
  Meteor.call('clearfinishedOrders', this._id);
}
})
