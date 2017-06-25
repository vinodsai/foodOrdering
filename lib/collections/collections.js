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
})
