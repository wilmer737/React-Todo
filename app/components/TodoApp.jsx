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
                },{
                    id: uuid(),
                    text: 'clean the chicken',
                },{
                    id: uuid(),
                    text: 'be beraco',
                },{
                    id: uuid(),
                    text: 'buy the finca',
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
                    text: todo
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

    render: function () {
        var {todos} = this.state;
        return (
            <div>
                <Search onSeach={this.handleSearch}/>
                <TodoList todos={todos} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        );
    }
});

module.exports = TodoApp;