var React = require('react');
var TodoList = require('TodoList');

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

    render: function () {
        var {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos} />
            </div>
        );
    }
});

module.exports = TodoApp;