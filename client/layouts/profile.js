Template.profile.onRendered(function() {
  Meteor.subscribe('profileOrders');
  Meteor.subscribe('finishedOrders');
})
Template.profile.helpers({
  userOrders: function() {
    return ProfileOrders.find({userId: Meteor.userId()}).count();
  },
  profileOrder: function() {
    return ProfileOrders.find({userId: Meteor.userId()});
  }
})
Template.profile.events({
  'click #favouriteOrder': function(){
    Meteor.call('addFavouriteOrder', this.name,this.coffee,this.snacks,this.desserts,this.time);
  }
})
