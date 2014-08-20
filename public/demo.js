// Define Todo Model
 
var ToDo = Backbone.Model.extend({
  defaults: {
    
    
    
  }
  
});

// Create a new ToDo object

var myToDo = new ToDo({
  
  title: 'Check attributes property of the logged models in the console'
  
  
});

// Views
var ToDoView = Backbone.View.extend({
  
  tagname: 'li',
  todoTpl: _.template($('#item-template').html()),
  
  events: {
   'dblclick label': 'edit',
   'keypress .edit': 'updateOnEnter',
   'blur .edit': 'close
  
  },

  // Call wehn the view is first created
initialize: funtion() {
  this.$el = $('#todo');
  
  
  
},


                                    
                                    
  
  
});