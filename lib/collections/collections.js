Orders = new Mongo.Collection('Orders');
Orders.allow({
  insert: function() {
    return false;
  }
});
FinishedOrders = new Mongo.Collection('FinishedOrders');
FinishedOrders.allow({
  insert: function() {
    return false;
  }
});
ProfileOrders = new Mongo.Collection('ProfileOrders');
ProfileOrders.allow({
  insert: function() {
    return false;
  }
});
FavouriteOrders = new Mongo.Collection('FavouriteOrders');
FavouriteOrders.allow({
  insert: function() {
    return false;
  }
});
Feedback = new Mongo.Collection('Feedback');
Feedback.allow({
  insert: function() {
    return false;
  }
});
