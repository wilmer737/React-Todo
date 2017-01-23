var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add new todo to the todo state on handleAddTodo', () => {
        var todoText = 'meet El Patron';
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({todos: []});
        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText);
        expect(todoApp.state.todos[0].createdAt).toBeA('number');
    });

    it('should toggle completed value when handleToggle called', () => {
        var todoData = {
            id: 11,
            text: 'jump',
            completed: false,
            createdAt: 0,
            completedAt: undefined,
        };

        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({todos: [todoData]});

        expect(todoApp.state.todos[0].completed).toBe(false);
        todoApp.handleToggle(11);
        expect(todoApp.state.todos[0].completed).toBe(true);
        expect(todoApp.state.todos[0].completedAt).toBeA('number');
    });

    it('should set completedAt to undefined when completed is toggled to false', () => {
        var todoData = {
            id: 11,
            text: 'jump',
            completed: true,
            createdAt: 0,
            completedAt: 0,
        };
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({todos: [todoData]});

        expect(todoApp.state.todos[0].completed).toBe(true);
        expect(todoApp.state.todos[0].completedAt).toBeA('number');

        todoApp.handleToggle(11);
        expect(todoApp.state.todos[0].completed).toBe(false);
        expect(todoApp.state.todos[0].completedAt).toBe(undefined);
    });
});
