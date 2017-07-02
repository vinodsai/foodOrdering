Template.message.onRendered(function() {
  Meteor.subscribe('feedbacks');
})
Template.message.helpers({
  messageCount: function(){
    return Feedback.find().count();
  }
})
