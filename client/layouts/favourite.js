Template.favourite.onRendered(function() {
  Meteor.subscribe('favouriteOrders');
})
Template.favourite.helpers({
  favouriteOrder: function(){
    return FavouriteOrders.find();
  }
})
