var homepage = require("../../pages/TodoHomepage.po.js");

describe('Todo Home Page', function(){
	var todoHomepage = new homepage();
	beforeEach(function(){
    	todoHomepage.get();
  	})
	it('should have a title', function(){
		expect(todoHomepage.getTitle()).to.eventually.equal("AngularJS • TodoMVC");
	})
	it('should add a todo item', function(){
		todoHomepage.setTodo('Test Todo item 1');
		todoHomepage.addTodoItem()
		expect(todoHomepage.getTodo()).to.eventually.equal('Test Todo item 1');
	})
	it('Shold todo list count is equal to the length of list', function(){
		
	})
});

