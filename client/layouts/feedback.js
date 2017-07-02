Template.feedback.onRendered(function() {
  Meteor.subscribe('feedbacks');
})
Template.feedback.events({
  'click #sendFeedback': function(){
    var feedback = $('#comment').val();
    Meteor.call('addFeedback', feedback);
    event.preventDefault();
    $('#comment').val('');
    sAlert.success('Your message', {timeout:2000, position:'top'});
    }
})
