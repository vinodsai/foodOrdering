Template.foodOrder.events({
  'click #order':function(){
    alert('Order is placed');
  }
})
Template.foodOrder.helpers({
  name: function(){
    return Session.get('name');
  },
  coffee: function(){
    return Session.get('coffeeName')
  },
  snacks: function(){
    return Session.get('snacksName')
  },
  desserts: function(){
    return Session.get('dessertsName')
  },
  time: function(){
    return Session.get('time')
  }
  // total: function(){
  //   if(Session.get('coffeeName')===Cappucino){
  //     return '90';
  //   }
  // }
})
