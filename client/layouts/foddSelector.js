Template.foodSelector.rendered = function() {
    $('.datetimepicker').datetimepicker();
}
Template.foodSelector.events({
  'click #select-food':function(){
    event.preventDefault();
    Session.set('name',$('#inputName').val())
    console.log(Session.get('name'));

    Session.set('coffeeName',$('#coffee-select').val())
    console.log(Session.get('coffeeName'));

    Session.set('snacksName',$('#snacks-select').val())
    console.log(Session.get('snacksName'));

    Session.set('dessertsName',$('#desserts-select').val())
    console.log(Session.get('dessertsName'));

    Session.set('time',$('.set-due-date').val())
    console.log(Session.get('time'));
    // console.log($('#coffee-select').val());
    // console.log($('#snacks-select').val());
    // console.log($('#desserts-select').val());
  }
})
