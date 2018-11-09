
var TodoHomepage = function() {
	var todoInput = element(by.model('newTodo'));
	var addTodo= element(by.css('.todo-form'));
	var todoList = element.all(by.css('.todo-list li'));
	this.get = function() {
    	browser.get('http://todomvc.com/examples/angularjs/');
  	};
	this.getTitle = function (){
		return browser.getTitle();
	}
	this.addTodoItem = function (){
		return addTodo.submit();
	}
	this.setTodo = function(todo) {
    	todoInput.sendKeys(todo);
	};
	this.getTodo = function() {
    	return todoList.get(0).getText();
  	};
};

module.exports = TodoHomepage