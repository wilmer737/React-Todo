var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var Provider = require('react-redux');
var configureStore = require('configureStore');//.configure();
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');
var TodoList = require('TodoList');

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

});
