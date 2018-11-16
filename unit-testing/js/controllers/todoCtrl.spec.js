'use strict';
describe('Todo Controller', function () {
	var $controller, scope,store;
	beforeEach(module('todomvc'));
	beforeEach(inject(function(_$controller_, _$rootScope_, localStorage){
	    scope = _$rootScope_.$new();
		store = localStorage;

		localStorage.todos = [];
		localStorage._getFromLocalStorage = function () {
			return [];
		};
		
		localStorage._saveToLocalStorage = function (todos) {
			localStorage.todos = todos;
		};

		$controller = _$controller_('TodoCtrl', {
			$scope: scope,
			store: store
		});
	}));

	it('should not have any Todos in list while page load', function () {
		expect(scope.todos.length).to.be.equal(0);
	});

	it('should not have any edited Todo in list while page load', function () {
		expect(scope.editedTodo).to.be.null;
	});

	describe('having no Todos', function () {
		var $controller;
		beforeEach(inject(function (_$controller_) {
			$controller = _$controller_('TodoCtrl', {
				$scope: scope,
				store: store
			});
			scope.$digest();
		}));

		it('should not add an empty Todos', function () {
			scope.newTodo = '';
			scope.addTodo();
			scope.$digest();
			expect(scope.todos.length).to.be.equal(0);
		});

		it('should not add any whitespaces todo', function () {
			scope.newTodo = '             ';
			scope.addTodo();
			scope.$digest();
			expect(scope.todos.length).to.be.equal(0);
		});

		it('should trim whitespace fwhile adding new todos', function () {
			scope.newTodo = '  Test of whitespace todos  ';
			scope.addTodo();
			scope.$digest();
			expect(scope.todos.length).to.be.equal(1);
			expect(scope.todos[0].title).to.be.equal('Test of whitespace todos');
		});
	});

	describe('having some saved Todos', function () {
		var $controller;
		beforeEach(inject(function (_$controller_) {
			$controller = _$controller_('TodoCtrl', {
				$scope: scope,
				store: store
			});
			store.insert({ title: 'Test Todo 1', completed: false });
			store.insert({ title: 'Test Todo 2', completed: false });
			store.insert({ title: 'Test Todo 3', completed: false });
			store.insert({ title: 'Test Todo 4', completed: true });
			store.insert({ title: 'Test Todo 5', completed: true });
			scope.$digest();
		}));	
			

		it('should count Todos correctly', function () {
			expect(scope.todos.length).to.be.equal(5);
			expect(scope.remainingCount).to.be.equal(3);
			expect(scope.completedCount).to.be.equal(2);
			expect(scope.allChecked).to.be.false;
		});

			it('should save Todos to local storage', function () {
				expect(scope.todos.length).to.be.equal(5);
			});

			it('should trim Todos on update', function () {
				var todo = store.todos[0];
				scope.editTodo(todo);
				todo.title = ' Test Todo 5  ';
				scope.saveEdits(todo);
				expect(scope.todos[0].title).to.be.equal('Test Todo 5');
			});

			it('should clear completed Todos on click of clear completed link', function () {
				scope.clearCompletedTodos();
				expect(scope.todos.length).to.be.equal(3);
			});

			it('should mark all Todos completed on click of markAll', function () {
				scope.markAll(true);
				scope.$digest();
				expect(scope.completedCount).to.be.equal(5);
			});

			it('on revert of todo get a Todo to its previous state', function () {
				var todo = store.todos[0];
				scope.editTodo(todo);
				todo.title = 'testing of todo';
				scope.revertEdits(todo);
				scope.$digest();
				expect(scope.todos[0].title).to.be.equal('Test Todo 1');
			});
		});
});
