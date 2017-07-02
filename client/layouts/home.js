Template.home.onRendered(function() {
  Meteor.subscribe('feedbacks');
})

Template.home.helpers({
  dashboardCss: function(){
    return 'dashboardCss';
  },
  messageCount: function(){
    return Feedback.find().count();
  }
})
