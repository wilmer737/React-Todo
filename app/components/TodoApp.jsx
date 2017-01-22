var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var Search = require('Search');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuid(),
                    text: 'Walk the dog',
                    completed: false,
                },{
                    id: uuid(),
                    text: 'clean the chicken',
                    completed: true,
                },{
                    id: uuid(),
                    text: 'be beraco',
                    completed: true,
                },{
                    id: uuid(),
                    text: 'buy the finca',
                    completed: false,
                },
            ]
        };
    },

    handleAddTodo: function (todo) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: todo,
                    completed: false,
                },
            ],
        });

    },

    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase(),
        });
    },

    handleToggle: function (id) {
        var updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id)
                todo.completed = !todo.completed;

            return todo;
        });

        this.setState({
            todos: updatedTodos,
        });
    },

    render: function () {
        var {todos} = this.state;
        return (
            <div>
                <Search onSeach={this.handleSearch}/>
                <TodoList todos={todos} onToggle={this.handleToggle} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        );
    }
});

module.exports = TodoApp;
