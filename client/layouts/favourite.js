Template.favourite.onRendered(function() {
  Meteor.subscribe('favouriteOrders');
})
Template.favourite.helpers({
  favouriteOrder: function(){
    return FavouriteOrders.find();
  }
})
Template.favourite.events({
  'click #favouriteOrder': function(){
    Meteor.call('addOrder', this.name,this.coffee,this.snacks,this.desserts,this.time)
  }
})
