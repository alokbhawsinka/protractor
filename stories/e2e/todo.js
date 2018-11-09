describe('todoMVC Home Page', function() {
  var newTodo = element(by.model('newTodo'));
  var addTodo= element(by.css('.todo-form'));
  let todoList = element.all(by.css('.todo-list li'));
  let todoListCount = element(by.css('.todo-count strong'));
  beforeEach(function(){
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
  it('Shold todo list count is equal to the length', function(){
    expect(todoList.count()).to.eventually.equal(1);
  })
  it('should able to edit a todo on double click', function(){
    var ele = element(by.css('.view > label'));
    browser.actions().doubleClick(ele).perform();
    // expect().to.eventually.be;
  })
  // it('should update editable todo item', function(){
  //   element.getAttribute('value')
  //   newTodo.sendKeys('Test Todo');
  //   addTodo.submit();
  //   expect(todoList.get(0).getText()).to.eventually.equal('Test Todo');
  // })
  // it('should able to edit a todo on double click', function(){
  //   browser.actions().doubleClick(element(by.cssContainingText('ng-binding'))).perform();
  //   expect(true).to.eventually.be.true;
  // })
  // it('should able to mark completed', function(){
  //   browser.actions().click(element(by.css('.toggle'))).perform();
  //   expect(true).to.eventually.be.true;
  // })
});
