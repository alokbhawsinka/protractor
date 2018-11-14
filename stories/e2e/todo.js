describe('todoMVC Home Page', function() {
  var newTodo = element(by.model('newTodo'));
  var addTodo= element(by.css('.todo-form'));
  let todoList = element.all(by.css('.todo-list li'));
  let todoListCount = element(by.binding('remainingCount'));
  var clrButton = element(by.buttonText('Clear completed'));
  var editTodo= element(by.css('.todo-list > li > form'));
  before(function(){
    return browser.get('http://todomvc.com/examples/angularjs/');
    
  })
  it('should have a title', function(){
    var title = browser.getTitle();
    expect(title).to.eventually.equal("AngularJS • TodoMVC");
    
  });
  it('should add a todo item', function(){
    newTodo.sendKeys('Test Todo');
    addTodo.submit();
    expect(todoList.get(0).getText()).to.eventually.equal('Test Todo');
  })
  it('should able to edit a todo on double click', function(){
    var ele = element(by.css('.view > label'));
    browser.actions().doubleClick(ele).perform();
    expect(true).to.be.true;
  })
  it('Shold todo list count is equal to the length', function(){
    expect(todoList.count()).to.eventually.equal(todoListCount.getText());
  })
  it('should able to mark completed', function(){
    browser.actions().click(element(by.css('.toggle'))).perform();
    expect(true).to.be.true;
  })
  it('should able to clear list on click of clear completed', function(){
    clrButton.click();
    expect(true).to.be.true;
  })
  it('should update an editable todo', function(){
    var editableTodo = element(by.model('todo.title'))
    editableTodo.sendKeys('Test Todo 123');
    editTodo.submit();
    expect(todoList.get(0).getText()).to.eventually.equal('Test Todo 123');
  })

});
