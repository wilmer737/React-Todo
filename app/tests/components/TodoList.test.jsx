var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render 1 todo component for each todo item', () => {
       var todos = [{id: 1, text: 'do something'}, {id: 2, text: 'check mail'}];
       var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
       var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

       expect(todoComponents.length).toBe(todos.length);
    });
});