Template.foodOrder.onRendered(function() {
  Meteor.subscribe('Orders');
  Meteor.subscribe('profileOrders');
  Session.set('name', '');
  Session.set('coffeeName', '');
  Session.set('snacksName', '');
  Session.set('dessertsName', '');
  Session.set('time', '');
})


Template.foodOrder.events({
  'click #order':function(){
    var name = Session.get('name');
    var name = name.toUpperCase();
    var coffee = Session.get('coffeeName');
    var snacks = Session.get('snacksName');
    var desserts = Session.get('dessertsName');
    var time = Session.get('time');
    Meteor.call('addOrder', name,coffee,snacks,desserts,time)
  }
})
Template.foodOrder.helpers({
  name: function(){
    return Session.get('name');
  },
  coffee: function(){
    return Session.get('coffeeName');
  },
  snacks: function(){
    return Session.get('snacksName');
  },
  desserts: function(){
    return Session.get('dessertsName');
  },
  time: function(){
    return Session.get('time');
  }
  // total: function(){
  //   if(Session.get('coffeeName')===Cappucino){
  //     return '90';
  //   }
  // }
})
