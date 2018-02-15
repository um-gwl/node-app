const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Nodetest');

var todo = mongoose.model('Todo',{
  text : {
    type : String
  },
  complete : {
    type : Boolean,
    default: false
  },
  complete_at : {
    type : Number
  }
});

var newTodo = new todo({text : 'crum call sunday'});

newTodo.save().then((doc) => {
  console.log('Save todo',doc);
},
(e) => {
  console.log('unable to save');
});
