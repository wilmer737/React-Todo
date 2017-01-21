var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog',
                },{
                    id: 2,
                    text: 'clean the chicken',
                },{
                    id: 3,
                    text: 'be beraco',
                },{
                    id: 4,
                    text: 'buy the finca',
                },
            ]
        };
    },

    handleAddTodo: function (todo) {
        alert('new todo: ' + todo);

    },

    render: function () {
        var {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        );
    }
});

module.exports = TodoApp;