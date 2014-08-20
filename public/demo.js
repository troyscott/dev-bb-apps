// Define Todo Model
 
var ToDo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
  
});


// Create a ToDo

var myTodo = new ToDo({
  title: 'Check the console dude'
  
});