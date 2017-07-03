Template.message.onRendered(function() {
  Meteor.subscribe('feedbacks');
})
Template.message.helpers({
  messageCount: function(){
    return Feedback.find().count();
  },
  eachFeedback: function(){
    return Feedback.find({}, {sort: {createdAt: -1}});
  }
})
Template.message.events({
  'click #deleteFeedback':function(){
    Meteor.call('deleteFeedback', this._id)
  }
})
