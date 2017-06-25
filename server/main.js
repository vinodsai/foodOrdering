import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

});
Meteor.publish("Orders", function () {
  return Orders.find();
});
Meteor.publish("finishedOrders", function () {
  return FinishedOrders.find();
});
