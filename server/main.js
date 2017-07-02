import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

});
Meteor.publish("Orders", function () {
  return Orders.find();
});
Meteor.publish("finishedOrders", function () {
  return FinishedOrders.find();
});
Meteor.publish("profileOrders", function () {
  return ProfileOrders.find();
});
Meteor.publish("favouriteOrders", function () {
  return FavouriteOrders.find();
});
Meteor.publish("feedbacks", function () {
  return Feedback.find();
});
